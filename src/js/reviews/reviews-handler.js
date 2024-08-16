import reviewsCreate from './reviews-create';
import { createErrMsg, createOkMsg } from '../helpers/create-msg';
import data from '../../data/reviews.json';

import { axiosInst } from '../helpers/api';

const reviewsListRef = document.querySelector('.reviews-list');

async function getReviews() {
  //   try {
  //     const response = await axiosInst.get('reviews');
  //     if (response) {
  //       if (response.status === 200) {
  //         console.log(response.data);
  //         createErrMsg('Fetch success');
  //         await reviewsCreate(response.data, reviewsListRef);
  //       }
  //     }
  //   } catch (error) {
  //     createOkMsg('fetch Error ');
  //     console.log(error.message);
  //   }
  reviewsCreate(data, reviewsListRef);
}

getReviews();
