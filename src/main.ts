import { CommonValidator } from "./utils/validators";

const validator = new CommonValidator();

// postcode validity
console.log('postcode, valid input 02345', validator.isUkrainianPostCodeValid('02345'));
console.log('postcode, invalid input 00345', validator.isUkrainianPostCodeValid('00345'));

// url validity
console.log('url, valid input https://stackoverflow.com/', validator.isUrlValid('https://stackoverflow.com/'));
console.log('url, invalid https://stackoverflow/', validator.isUrlValid('https://stackoverflow/'));

// get all html comments
console.log('html comments', validator.getHTMLComments('1234 <!-- Hello comment --> 5678 <!-- i am here -->'));

// get all html tags
console.log('html tags', validator.getHTMLTags(' hi <div></div> , i am going <span></span>'));

// output
// postcode, valid input 02345 true
// postcode, invalid input 00345 false
// url, valid input https://stackoverflow.com/ true
// url, invalid https://stackoverflow/ false
// html comments [ '<!-- Hello comment -->', '<!-- i am here -->' ]
// html tags [ '<div>', '</div>', '<span>', '</span>' ]
