import { createErrMsg, createOkMsg } from '../helpers/create-msg';
import modalCreate from '../modal-window/modal-window-create';
import validateEmail from './validate-email';
import { axiosInst } from '../helpers/api';
import {
  ERROR_FETCH,
  WRONG_EMAIL,
  NO_COMMENT,
  NO_EMAIL,
} from './errors-messages';

import openModalWindow from '../modal-window/modalwindow-handle';

const formRef = document.querySelector('.footer-form');

const emailInputRef = formRef.querySelector('.footer-email');
const commentInputRef = formRef.querySelector('.footer-comment');
const footerBtn = document.querySelector('.footer-button');
const errEmailSpanRef = document.querySelector('.footer-email-error');
const errCommentSpanRef = document.querySelector('.footer-comment-error');

const successEmailSpanRef = document.querySelector('.footer-email-success');

formRef && formRef.addEventListener('submit', handleSendMessage);

emailInputRef && emailInputRef.addEventListener('input', changeContolsStatus);
commentInputRef &&
  commentInputRef.addEventListener('input', changeContolsStatus);

async function handleSendMessage(event) {
  event.preventDefault();

  const emailValue = emailInputRef.value.trim();
  if (!emailValue) {
    errEmailSpanRef && errEmailSpanRef.classList.add('visible');
    createErrMsg(NO_EMAIL);
    return;
  }
  const commentValue = commentInputRef.value.trim();
  if (!commentValue) {
    errCommentSpanRef && errCommentSpanRef.classList.add('visible');
    createErrMsg(NO_COMMENT);
    return;
  }

  if (!validateEmail(emailValue)) {
    createErrMsg(WRONG_EMAIL);
    errEmailSpanRef && errEmailSpanRef.classList.add('visible');
    return;
  }

  const bodyRequest = { email: emailValue, comment: commentValue };

  try {
    const response = await axiosInst.post('requests', bodyRequest);
    if (response) {
      if (response.status >= 200 && response.status < 300) {
        await modalCreate(
          response.data,
          document.querySelector('.modal-backdrop')
        );
        createOkMsg('Success!');
        openModalWindow();
        formRef.reset();
        successEmailSpanRef && successEmailSpanRef.classList.add('visible');
      }
    }
  } catch (error) {
    errEmailSpanRef && errEmailSpanRef.classList.add('visible');
    console.log(error.message);
  } finally {
    changeContolsStatus();
  }
}

function changeContolsStatus() {
  errEmailSpanRef && errEmailSpanRef.classList.remove('visible');
  errCommentSpanRef && errCommentSpanRef.classList.remove('visible');
  successEmailSpanRef && successEmailSpanRef.classList.remove('visible');

  footerBtn.disabled =
    !emailInputRef.value.trim() || !commentInputRef.value.trim();
}

changeContolsStatus();
