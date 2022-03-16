# Pagination Component

### A simple react component for pagination that gives buttons customization to you.

## Props
### page: number (current page)
### setPage: (page:number) => void (To set the current page)
### totalPages: number (Total number of pages)
### setting : {
    NextButton: CustomNextButtonComponent 
    PrevButton: CustomPrevButtonComponent
    NumberButton: CustomNumberButtonComponent
} 

### In setting if you want to use default buttons, then leave that particular field empty as shown below (you can put all three field empty)
### setting : {
    NextButton: null 
    PrevButton: CustomPrevButtonComponent
    NumberButton: CustomNumberButtonComponent
} 

# How to use pagination component in your react app

## import {Pagination} from '@nikhilgupta59/react-paginate

### const [page,setPage] = React.useState(1)
### const totalPages = 20
### const setting = {
    NextButton: CustomNextButton,
    PrevButton: CustomPrevButton,
    NumberButton: CustomNumberButton
}

##  $\lt$ Pagination page={page} setPage={setPage} totalPages={totalPages} setting={setting} /$\gt$


# How to make Custom NextButton 
### It takes onClick function as a prop, you do not need to implement it, just include it as prop and assign it as shown in example below, and all the customization and styling is yours...PUT YOUR VAILIDATION LIKE IF CURRENT PAGE IS THE LAST PAGE THEN THIS BUTTON SHOULD DISABLED

## const Next = ({ onClick }) => {
  return $\lt$ button onClick={onClick} $\gt$ next $\lt$/button $\gt$

};
 
# How to make Custom PrevButton 
### It takes onClick function as a prop, you do not need to implement it, just include it as prop and assign it as shown in example below, and all the customization and styling is yours...

## const Prev = ({ onClick }) => {
  return $\lt$ button onClick={onClick} $\gt$ Prev $\lt$/button $\gt$

};
 
 # How to make Custom NumberButton 
### It takes onClick function as a prop, you do not need to implement it, just include it as prop and assign it as shown in example below, and all the customization and styling is yours...

## const Number = ({ onClick, pageNum }) => {
  return $\lt$ button onClick={onClick} $\gt$ {pagrNum} $\lt$/button $\gt$

};
 