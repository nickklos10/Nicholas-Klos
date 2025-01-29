document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project-card");
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementsByClassName("close")[0];

  const projectData = {
    project1: {
      title: "Adventure Battle Board Game",
      image: "images/ab-game.jpg",
      description:
        "Adventure Battle Game is a full-stack application designed to offer a dynamic and engaging multiplayer experience where players navigate a game board, collect treasures, and compete against each other. The game’s interactive gameplay allows players to move in different directions, collect treasures, and eliminate opponents, with the game concluding when all treasures are collected or only one player remains. The player with the highest points at the end is declared the winner, providing a competitive edge to the gameplay.",
      technologies: [
        "Full-Stack Dev",
        "Python",
        "OOP",
        "Flask",
        "JavaScript",
        "CSS",
        "HTML",
      ],
      link: "https://github.com/nickklos10/Adventure-Battle",
    },
    project2: {
      title: "API-Talkbot",
      image: "images/chatbot.jpg",
      description:
        "This project is a chatbot application that uses OpenAI's GPT-3.5-turbo model to generate responses to user input. The chatbot runs on a Node.js server and interacts with a front-end interface where users can input their messages.",
      technologies: ["API", "Full-Stack", "AI", "Javascript"],
      link: "https://github.com/nickklos10/LLM-chatbot",
    },
    project3: {
      title: "AI Emotion Analyzer",
      image: "images/ed.jpg",
      description:
        "This is a web application that detects emotions in text using OpenAI's GPT-4o-mini model. The app is built with Flask for the backend and HTML/CSS/JavaScript for the frontend. It allows users to input text, analyzes the sentiment, and returns the likelihood of each emotion as a percentage.",
      technologies: ["Full-Stack", "API", "Flask", "Python", "AI"],
      link: "https://github.com/nickklos10/NLP-emotion-detection",
    },
    project4: {
      title: "Personal Portfolio",
      image: "images/portfolio.jpg",
      description:
        "This dynamic web portfolio showcases my skills in web development, featuring a responsive design, interactive elements, and visually appealing aesthetics. The project is built using HTML for structure, CSS for styling, and JavaScript for adding functionality and interactivity. It effectively highlights my experience and projects, making a strong impression on potential employers or clients.",
      technologies: ["Full-Stack", "JavaScript", "HTML", "CSS"],
      link: "https://github.com/nickklos10/NLP-emotion-detection",
    },
    project5: {
      title: "Weather Prediction",
      image: "images/ml-wp.jpg",
      description:
        "This project implements and compares several machine learning models to predict whether it will rain tomorrow based on historical weather data. The models used include Logistic Regression, K-Nearest Neighbors (KNN), Decision Tree, and Support Vector Machine (SVM). The project evaluates each model's performance using various metrics such as Accuracy, Jaccard Index, F1 Score, and Log Loss.",
      technologies: [
        "Machine Learning",
        "Python",
        "decision-trees",
        "KNN-classification",
        "model-evaluation",
        "scikit-learn",
      ],
      link: "https://github.com/nickklos10/Weather-Prediction-Models",
    },
    project6: {
      title: "Serie A Standings Prediction",
      image: "images/serie-a.jpg",
      description:
        "This project involves scraping, cleaning, and analyzing Serie A soccer data, including team statistics, player transfers, and manager details, to build machine learning models predicting various outcomes. The models predict team points, goals, wins, draws, losses, and final rankings for the 2024/2025 season.",
      technologies: [
        "Machine Learning",
        "Jupiter Notebook",
        "Keras",
        "Pandas",
        "SHAP",
        "beautiful-soup",
        "Tensorflow",
        "matplotlib",
        "scikit-learn",
      ],
      link: "https://github.com/nickklos10/SerieA_Machine_Learning_Predictions_2025",
    },
    project7: {
      title: "Concrete Crack Detector",
      image: "images/concretecrack.jpg",
      description:
        "A Flask-based web application to detect cracks in concrete using a pre-trained ResNet-18 model. The application allows users to upload images of concrete surfaces and utilizes a deep learning model to determine whether a crack is present with a high level of confidence.",
      technologies: [
        "Machine Learning",
        "Jupiter Notebook",
        "Pytorch",
        "torchvision",
        "flask",
        "axios",
        "jinja2",
        "matplotlib",
        "html-css-javascript",
      ],
      link: "https://github.com/nickklos10/Concrete-Crack-Detector-CV",
    },
    project8: {
      title: "Three tier distributed Web App for an Enterprise system",
      image: "images/p4.jpg",
      description:
        "A servlet/JSP-based multi-tiered enterprise application using a Tomcat container that allows clients, accountants and root-level users to execute SQL queries and updates with specific business logic implementation.",
      technologies: [
        "MySQL",
        "Java",
        "JDBC",
        "JSP-servlet",
        "Apache Tomcat",
        "ajax",
        "java-ee",
        "html-css-javascript",
      ],
      link: "https://github.com/nickklos10/Three-Tier-Distributed-Web-Application",
    },
    project9: {
      title: "Fashion CNN Classifier",
      image: "images/fashionmnist.jpg",
      description:
        "This project implements a deep learning model using Convolutional Neural Networks (CNNs) to classify the Fashion-MNIST dataset into 10 different categories of clothing and accessories. The project includes the dataset preprocessing pipeline, CNN architecture, training loop, validation performance evaluation, and visualizations of cost and accuracy over epochs.",
      technologies: [
        "Python",
        "PyTorch",
        "torchvision",
        "matplotlib",
        "CNN",
        "Deep Learning",
      ],
      link: "https://github.com/nickklos10/fashion-mnist-cnn-classifier",
    },
    project10: {
      title: "Banking System Simulation",
      image: "images/banking.jpg",
      description:
        "This project is a multithreaded banking system simulation designed to handle concurrent banking operations such as deposits, withdrawals, and transfers between accounts. The project leverages Java's multithreading and synchronization mechanisms to simulate real-world banking behavior with multiple agents interacting concurrently with shared resources. Additionally, internal and federal audits are conducted at random intervals to ensure the correctness of transactions. Transactions are logged, and any that violate defined thresholds are flagged for further analysis.",
      technologies: ["Java", "Multithreading", "Concurrency", "OOP"],
      link: "https://github.com/nickklos10/BankAccount-Simulation",
    },
  };

  projectCards.forEach((card) => {
    card.addEventListener("click", function () {
      const projectId = this.getAttribute("data-project");
      const project = projectData[projectId];

      document.getElementById("modal-title").textContent = project.title;
      document.getElementById("modal-image").src = project.image;
      document.getElementById("modal-description").textContent =
        project.description;

      const techContainer = document.getElementById("modal-technologies");
      techContainer.innerHTML = "";
      project.technologies.forEach((tech) => {
        const span = document.createElement("span");
        span.textContent = tech;
        techContainer.appendChild(span);
      });

      document.getElementById("modal-link").href = project.link;

      modal.style.display = "block";
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
