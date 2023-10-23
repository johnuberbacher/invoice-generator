# Invoice Generator - React App
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

An Invoice creator project built with React. Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device. Uses [jspdf-react](https://www.npmjs.com/package/jspdf-react) to capture the data from the modal and covert it from canvas -> pdf.

### Live Demo
https://invoice-generator-react.netlify.app/

### Screenshots
<img src="https://i.imgur.com/wRetnxk.png" style="max-width: 100px; width: 100%; height: auto;">
<img src="https://i.imgur.com/AZChaei.png" style="max-width: 100px; width: 100%; height: auto;">
<img src="https://i.imgur.com/Bz3K3DE.png" style="max-width: 100px; width: 100%; height: auto;">

### Installation

```
git clone https://github.com/johnuberbacher/invoice-generator

npm install

npm start / npm run build
```

### To-Do
 - Integrate Redux Store
 - Create Redux actions, action types and reducers to manage invoice state(add, edit, view and delete invoices)
 - Implement component to to display list of invoices
 - make list of invoices as first screen and create invoice button
 - invoice list add buttons or option to view, edit or delete operations
 - Ensure proper state management throughout the application by connecting components to the Redux store.
 - Clean and well documented code
 - implement copy to a new invoice from existing invoice functionality

### Refresher learning
 - list virtualisation
 - modals
 - 

 ### Implementation steps
 - redux
 - react-router
 - Modal-> react-portal 
 - list component
		- list virtualisation
		- search
 - create/edit/view component
 - copy to new create component
 ### packages used
 - react-redux
 - redux-toolkit
 - React router dom
 - react - toastify
 - 

 # additional features
 - vite
 - vitest
 - playwright
 - hmr
 - performance observer
 - Tailwind
 - 