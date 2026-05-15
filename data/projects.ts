export type ProjectItem = {
    title: string;
    summary: string;
    tech: string[];
    highlights: string[];
    github?: string;
  };
  
  export const projects: ProjectItem[] = [
    {
      title: "AI Clinical Assistant system",
      summary: "Built an AI-powered clinical assistant that answers healthcare-related questions using Retrieval-Augmented Generation (RAG) over medical knowledge sources.",
      tech: ["Python", "FastAPI", "OpenAI", "FAISS", "LangChain", "Streamlit"],
      highlights: [
        "Implemented document retrieval and semantic search for context-aware medical question answering.",
        "Designed backend APIs and real-time chatbot workflows for healthcare assistance.",
      ],
      github: "https://github.com/nikhil1817/AI_Clinical_Assistant_system",
    },
    {
      title: "AI GitHub Engineering Assistant",
      summary: "Built an AI-powered repository analysis system that clones GitHub repositories, indexes source code, and answers technical questions using Retrieval-Augmented Generation (RAG).",
      tech: ["Python", "FastAPI", "Streamlit", "OpenAI", "FAISS", "LangChain"],
      highlights: [
        "Implemented repository parsing and semantic code search using embeddings and vector similarity.",
        "Built a RAG pipeline to generate contextual answers from indexed codebases.",
      ],
      github: "https://github.com/nikhil1817/AI_Github_Engineering_Assistant",
    },
    {
      title: "Smart Interview System",
      summary: "Developed an AI-driven interview simulation platform that conducts technical interviews, evaluates responses, and provides structured feedback in real time.",
      tech: ["Python", "OpenAI", "FastAPI", "NLP", "Regex", "Streamlit"],
      highlights: [
        "Implemented role-based interview flows with dynamic question generation and evaluation.",
        "Built automated response scoring and feedback analysis using NLP techniques.",
      ],
      github: "https://github.com/nikhil1817/Smart_Interview_System",
    },
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
  