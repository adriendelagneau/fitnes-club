toast.success(`abonné à la newsletter `)



const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };





  /***** toast variable environnement & toast container *****/


  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #006966;
  --toastify-color-success: #f48915;
  --toastify-color-warning:rgb(133, 124, 255);
  --toastify-color-error: #8d001a; 
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);
  
  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);
  
  --toastify-toast-width: 260px;
  --toastify-toast-background: #fff;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;
  
  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;
  
  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  
  /* Used when no type is provided
     toast("**hello**")
     */
     --toastify-color-progress-light: linear-gradient(to right,
     #4cd964,
     #5ac8fa,
      #007aff,
      #34aadc,
      #5856d6,
      #ff2d55);
      /* Used when no type is provided */
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);