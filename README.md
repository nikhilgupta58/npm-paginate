# Pagination Component

### A simple react component for pagination that gives buttons customization to you.

![Pagination look](https://res.cloudinary.com/dhiu02sfh/image/upload/v1647453550/1_kbopvc.png)


### Props
page: number (current page)<br>
setPage: (page:number) => void (To set the current page)<br>
totalPages: number (Total number of pages)

```
setting : {
    NextButton: CustomNextButtonComponent 
    PrevButton: CustomPrevButtonComponent
    NumberButton: CustomNumberButtonComponent
} 
```
### In setting if you want to use default buttons, then leave that particular field empty as shown below (you can put all three field empty)

```
setting : {
    NextButton: null 
    PrevButton: CustomPrevButtonComponent
    NumberButton: CustomNumberButtonComponent
} 
```

### How to use pagination component in your react app

```
import {Pagination} from 'react-pagination-headless'
const [page,setPage] = React.useState(1)
const totalPages = 20
const setting = {
  NextButton: CustomNextButton,
  PrevButton: CustomPrevButton,
  NumberButton: CustomNumberButton
}

< Pagination page={page} setPage={setPage} totalPages={totalPages} setting={setting} />
```

### How to make Custom NextButton 
It takes onClick function as a prop, you do not need to implement it, just include it as prop and assign it as shown in example below, and all the customization and styling is yours...PUT YOUR VAILIDATION LIKE IF CURRENT PAGE IS THE LAST PAGE THEN THIS BUTTON SHOULD DISABLED

```
const Next = ({ onClick }) => {
  return < button onClick={onClick} > next </ button >
};
```
 
### How to make Custom PrevButton 
It takes onClick function as a prop, you do not need to implement it, just include it as prop and assign it as shown in example below, and all the customization and styling is yours...

```
const Prev = ({ onClick }) => {
  return < button onClick={onClick} > Prev </ button>
};
```
 
### How to make Custom NumberButton 
It takes onClick function as a prop, you do not need to implement it, just include it as prop and assign it as shown in example below, and all the customization and styling is yours...

```
const Number = ({ onClick, pageNum }) => {
  return < button onClick={onClick} > {pagrNum} </ button>
};
```