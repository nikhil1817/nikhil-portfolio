export type ProjectItem = {
    title: string;
    summary: string;
    tech: string[];
    highlights: string[];
    github?: string;
  };
  
  export const projects: ProjectItem[] = [
    {
      title: "Team Collaboration Platform",
      summary: "Engineered a production-style collaboration platform supporting workspace management, project planning, task tracking, file sharing, and real-time team communication using a containerized full-stack architecture.",
      tech: ["Java", "Spring Boot", "Next.js", "PostgreSQL", "Redis", "WebSocket", "Docker"],
      highlights: [
        "Designed a layered Spring Boot architecture with Controllers, Services, Repositories, PostgreSQL persistence, and Redis-powered activity tracking.",
        "Built real-time collaboration capabilities using WebSockets and containerized the entire stack with Docker Compose for reproducible deployment environments.",
      ],
      github: "https://github.com/nikhil1817/Team_Collaboration_Platform",
    },
    {
      title: "AI Workspace Platform",
      summary: "Built a production-grade AI workspace platform integrating RAG pipelines, vector search, conversational AI, evaluation systems, and enterprise knowledge retrieval for intelligent document analysis and decision support.",
      tech: ["Python", "FastAPI", "OpenAI", "LangChain", "FAISS", "Streamlit", "RAG", "Embeddings", "Vector Search"],
      highlights: [
        "Developed end-to-end retrieval and generation workflows using embeddings, semantic search, and context-aware LLM responses.",
        "Implemented evaluation, monitoring, and analytics modules to measure retrieval effectiveness, response quality, and AI system performance.",
      ],
      github: "https://github.com/nikhil1817/AI_Workspace_Platform",
    },
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
      summary: "Engineered an MCP-enabled AI assistant capable of repository analysis, semantic code retrieval, and intelligent codebase reasoning through tool-driven workflows and Retrieval-Augmented Generation (RAG).",
      tech: ["Python", "FastAPI", "Streamlit", "OpenAI", "FAISS", "LangChain", "MCP", "Vector Search"],
      highlights: [
        "Designed MCP tools for repository cloning, indexing, semantic search, and repository question-answering, enabling standardized agent-tool interactions.",
        "Developed an end-to-end RAG system combining embeddings, vector retrieval, and LLM reasoning to generate contextual answers from large codebases.",
      ],
      github: "https://github.com/nikhil1817/AI_Github_Engineering_Assistant",
    },
    {
      title: "Multi-Agent Research System",
      summary: "Built a multi-agent AI research platform that autonomously plans, executes, critiques, and refines research tasks using collaborative AI agents and human-in-the-loop workflows.",
      tech: ["Python", "FastAPI", "OpenAI", "LangGraph", "Streamlit", "Multi-Agent Systems", "RAG"],
      highlights: [
        "Designed specialized Planner, Researcher, Critic, and Summarizer agents that collaborate to generate high-quality research reports.",
        "Implemented agent orchestration, feedback loops, and human approval workflows to improve research accuracy and reduce hallucinations.",
      ],
      github: "https://github.com/nikhil1817/Multi-Agent-Research-System",
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
  