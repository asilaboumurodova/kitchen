function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const menuList = document.querySelector(".menu-list");
  const leftArrow = document.querySelector(".left");
  const rightArrow = document.querySelector(".right");
  const itemWidth = 226;
  const visibleItems = 3;
  let scrollAmount = 0;

  rightArrow.addEventListener("click", function () {
    if (scrollAmount < menuList.scrollWidth - menuList.clientWidth) {
      scrollAmount += itemWidth * visibleItems;
      menuList.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  });

  leftArrow.addEventListener("click", function () {
    if (scrollAmount > 0) {
      scrollAmount -= itemWidth * visibleItems;
      menuList.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".questions");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.querySelector(".answers");
      questions.forEach((q) => q.classList.remove("active"));

      if (answer.style.maxHeight === "0px" || !answer.style.maxHeight) {
        this.classList.add("active");
        answer.style.display = "block";
        setTimeout(() => {
          answer.style.maxHeight = answer.scrollHeight + "px";
          answer.style.opacity = "1";
        }, 10);
      } else {
        this.classList.remove("active");
        answer.style.maxHeight = "0";
        answer.style.opacity = "0";
        setTimeout(() => {
          answer.style.display = "none";
        }, 500);
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const signInBtn = document.querySelector('.signIn-btn');
  const modal = document.querySelector('.signIn-modal');
  const closeBtn = document.querySelector('.close-btn');
  const signInForm = document.querySelector('.signIn-form');
  const usernameInput = document.getElementById('username'); 
  const passwordInput = document.getElementById('password'); 

  function openModal() {
      modal.style.display = 'block';
  }

  function closeModal() {
      modal.style.display = 'none';
      usernameInput.value = '';
      passwordInput.value = '';
  }

  function handleSignIn(event) {
      event.preventDefault();
      alert('Welcome to our kitchen :)');
      closeModal();
  }

  if (signInBtn) {
      signInBtn.addEventListener('click', openModal);
  } else {
      console.error('Element with class "signIn-btn" not found.');
  }

  if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
  } else {
      console.error('Element with class "close-btn" not found.');
  }

  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          closeModal();
      }
  });

  if (signInForm) {
      signInForm.addEventListener('submit', handleSignIn);
  } else {
      console.error('Element with class "signIn-form" not found.');
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.order, .discount__content-btn, .contact_btn');
  const modal = document.getElementById('signUp-modal');
  const closeBtn = modal.querySelector('.close-btn');
  const form = document.getElementById('signUp-form');
  const signUpNameInput = document.getElementById('signUpName');
  const signUpEmailInput = document.getElementById('signUpEmail');
  const signUpPasswordInput = document.getElementById('signUpPassword');

  function closeModal() {
      modal.style.display = 'none';
      form.reset();
  }

  function openModal() {
      modal.style.display = 'block';
  }

  buttons.forEach(button => {
      button.addEventListener('click', openModal);
  });

  if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
  }

  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          closeModal();
      }
  });

  if (form) {
      form.addEventListener('submit', function(event) {
          event.preventDefault();
          const name = signUpNameInput.value;
          const email = signUpEmailInput.value;
          const password = signUpPasswordInput.value;
          alert(`Welcome ${name}! 
Your details: 
Email - ${email}
Password - ${password}`);
          closeModal();
      });
  }
});





