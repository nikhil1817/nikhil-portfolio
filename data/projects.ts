export type ProjectItem = {
    title: string;
    summary: string;
    tech: string[];
    highlights: string[];
    github?: string;
  };
  
  export const projects: ProjectItem[] = [
    {
      title: "Fake News Detection (BERT, NLP)",
      summary: "Transformer-based text classification system to detect fake news using BERT fine-tuning.",
      tech: ["Python", "Hugging Face", "Transformers", "BERT", "NLTK"],
      highlights: [
        "Built preprocessing pipeline (tokenization, stopword removal, lemmatization).",
        "Fine-tuned a pretrained BERT model on labeled dataset.",
        "Achieved strong validation performance and generalization on unseen samples.",
      ],
      github: "https://github.com/nikhil1817/Fake_news_detector",
    },
    {
      title: "Automated Admission Prediction",
      summary: "ML model to predict university admission likelihood based on applicant profiles.",
      tech: ["Python", "Scikit-Learn", "Pandas"],
      highlights: [
        "Performed feature engineering and data preprocessing.",
        "Trained and evaluated supervised learning models.",
        "Achieved 85%+ prediction accuracy.",
      ],
      github: "https://github.com/nikhil1817/Automated-Admission-Prediction",
    },
    {
      title: "Counterfeit Notes Detection (Flask + ML)",
      summary: "Web-based application to classify currency notes as authentic or counterfeit using KNN.",
      tech: ["Python", "Flask", "KNN", "Pandas"],
      highlights: [
        "Built end-to-end ML + web app integration.",
        "Performed parameter tuning to improve reliability.",
        "Achieved ~90% classification accuracy.",
      ],
      github: "https://github.com/nikhil1817/2020_CSE_16",
    },
    {
      title: "Sentiment Analysis (NLP)",
      summary: "Text sentiment classifier using NLP preprocessing and KNN-based prediction.",
      tech: ["Python", "Scikit-Learn", "NLTK"],
      highlights: [
        "Implemented preprocessing and feature extraction pipeline.",
        "Trained KNN model for sentiment prediction.",
        "Achieved 85%+ validation accuracy.",
      ],
      github: "https://github.com/nikhil1817/Sentiment_analysis",
    },
    {
      title: "HMI Screen Development (Real-Time Systems)",
      summary: "Designed a front-end HMI interface to monitor real-time railway signaling track status.",
      tech: ["C#", "AGUI"],
      highlights: [
        "Optimized data flow for real-time updates.",
        "Improved operator interaction and reduced information retrieval time by 25%.",
      ],
    },
  ];
  