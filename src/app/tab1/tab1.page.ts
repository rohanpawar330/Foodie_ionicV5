import { Component } from '@angular/core';
import { yourPostData } from '../dummy-data/dummy-data';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  searchName: any;
  similarPost: any;
  hashTagList: any = [{ 'value': 'choclate', 'show': false }, { 'value': 'food', 'show': false }, { 'value': 'kolfluencer', 'show': true }]

  private slideOpts = {
    slidesPerView: 2,
  };

  constructor() {
    console.log(yourPostData)
    this.searchName = yourPostData;
    this.similarPost = yourPostData;
  }

  hashTagClick(item) {
    console.log(item);
    let val = item.value;
    this.hashTagList.forEach(element => {
      if (element.value == item.value) {
        element.show = !element.show
      }
    });

    if (item.show) {
      this.searchName = this.searchName.filter((item: any) => {
        return (item.value.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.searchName = yourPostData
    }

  }


  likeCount(item) {
    console.log(item)
    if (!item.liked) {
      this.searchName.forEach(element => {
        if (element.value == item.value) {
          element.likeCount += 1;
          element.liked = true;
        }
      });
    } else {
      this.searchName.forEach(element => {
        if (element.value == item.value) {
          element.likeCount -= 1;
          element.liked = false;
        }
      });
    }
  }

  heartCount(item) {
    if (!item.hearted) {
      this.searchName.forEach(element => {
        if (element.value == item.value) {
          element.heartCount = element.heartCount + 1;
          element.hearted = true;
        }
      });
    } else {
      this.searchName.forEach(element => {
        if (element.value == item.value) {
          element.heartCount -= 1;
          element.hearted = false;
        }
      });
    }

  }



}
