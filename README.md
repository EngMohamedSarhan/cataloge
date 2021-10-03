<h2>Cataloge (Front-End)</h2>

This projest is live at [Cataloge](https://engmohamedsarhan.github.io/cataloge/#/) <br />
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) <br />
State management using [Redux](https://github.com/reduxjs/redux). <br />
UI using [MUI](https://github.com/mui-org/material-ui). <br />

<h3>Performance</h3>

![performance](/screenshots/performance.PNG)

<h3>Desktop screenshots</h3>

![desktop](/screenshots/desktop.PNG)
![desktop](/screenshots/desktop2.PNG)
![desktop](/screenshots/desktop3.PNG)

<h3>Mobile screenshots</h3>

<div style="display: flex; flex-wrap: wrap;"> 
  <img src='/screenshots/mobile.jpg' height='500' />
  <img src='/screenshots/mobile2.jpg' height='500' />
  <img src='/screenshots/mobile3.jpg' height='500' />
</div>

<h3>Problem</h3>

<p style="margin-left: 5px;">
    Fast and responsive cataloge page
</p>

<h3>Soluton</h3>

<p style="margin-left: 5px;">
    Every aspect of the design is responsive and handles any number of data with respect to monitors, tables and mobiles screen sizes
</p>

<h3>Architecture</h3>

<p >
    React: Fast development and trusted by combanies<br />
    Redux: Works great with react in state managements<br />
    Material UI: Reliable in performance<br />
</p>

<h3>Trade-offs</h3>

<p >
    The slider component might lag on weak devices, but it's better UX (its easier to slide than type) <br />
    The infinite scrolling is not perfect in case of huge data, but its better UX<br />
</p>

<ul>
  <li>CategoryCard</li>
  <li>CategoryDrawer</li>
  <li>CategoryList</li>
  <li>ClearButton</li>
  <li>NotFound</li>
  <li>MainBar</li>
  <li>ProductCard</li>
  <li>FilterDrawer</li>
</ul>

<h3>Logical & Representational components</h3>

<ul>
  <li>ElementsSlider</li>
  <li>LazyList</li>
  <li>PriceFilter</li>
  <li>ColorsFilter</li>
  <li>RatingFilter</li>
</ul>

<h3>ElementsSlider</h3>

<div >
    <p>Divides children according to screen size</p>
    <label>Props</label>
    <ul>
    <li>
        <label>width</label>
        <p>width per element</p>
    </li>
    <li>
        <label>extraWidth</label>
        <p>extraWidth is used in case the container is not 100% width</p>
    </li>
    <li>  
        <label>children</label>
        <p>1D array of html/jsx elements</p>
    </li>
    </ul>
</div>

<h3>LazyList</h3>

<div >
    <p>Enables infinite scrolling to 1D of html/jsx elements</p>
    <label>Props</label>
    <ul>
    <li>
        <label>children</label>
    </li>
    </ul>
</div>

<h3>Containers</h3>

<ul>
  <li>App</li>
  <li>Category</li>
</ul>

<h3>App</h3>

<p>Controls requests and routes in the app</p>

<h3>Category</h3>

<p>Cataloge page</p>
