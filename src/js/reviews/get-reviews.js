import reviewsCreate from './reviews-create';
import { createErrMsg, createOkMsg } from '../helpers/create-msg';
import data from '../../data/reviews.json';
import { axiosInst } from '../helpers/api';

const reviewsListRef = document.querySelector('.reviews-list');

let dataList = [];

async function getReviews() {
  try {
    const response = await axiosInst.get('reviews');
    if (response && response.status === 200) {
      console.log('STATUS', response.status);

      const reviewsListLen = response.data?.length;
      console.log(reviewsListLen);

      if (!reviewsListLen) {
        createErrMsg('Reviews not found');
      } else {
        createOkMsg('Fetch success!');
        dataList = response.data;
      }
    } else {
      createErrMsg('Invalid response');
    }
  } catch (error) {
    createErrMsg('Fetch Error!');
  } finally {
    reviewsCreate(dataList, reviewsListRef);
  }
}

export default getReviews;

// for testing swiper
export async function getReviewsList() {
  console.log(data);
  reviewsCreate(data, reviewsListRef);
}
