# Clarify 🍁

Built at Hackville 2026

Clarify is a document-aware web application that helps Canadians understand complex government and legal forms in plain language. Instead of relying on generic AI summaries, Clarify uses retrieval-augmented generation (RAG) to ensure every response is grounded directly in the uploaded document.

- __[Devpost](https://devpost.com/software/clarify-8l6w3a)__

---

## 🌟 Overview

Public services often fail not because they are unavailable, but because they are difficult to understand. Canadian government and legal forms are frequently long, dense, and written in institutional language that assumes prior knowledge most people do not have.

Clarify addresses this gap by turning static PDFs into interactive, understandable documents. Users upload a form and ask questions in plain language, receiving clear explanations sourced strictly from the document itself. This reduces misinterpretation, builds trust, and lowers the cognitive barrier to accessing essential services.

Clarify is designed as a gov-tech accessibility tool, not a generic chatbot.

---

## ✨ Key Features

* **📄 Document Upload & Parsing**  
  Upload government or legal PDFs and convert them into structured, searchable content.

* **🧠 RAG-Powered Chatbot**  
  Ask questions about a form and receive responses grounded directly in the document.

* **🖍️ Highlight-to-Explain**  
  Select specific sections of text to receive simplified explanations.

* **🇨🇦 Canada-Focused**  
  Designed specifically for Canadian government and legal workflows.

* **♿ Accessibility-First Design**  
  Reduced cognitive load, plain language, and clarity prioritized over verbosity.

* **🌗 Dark Mode & Responsive UI**  
  Fully usable across devices and lighting conditions.

---

## 📸 Screenshots

<img width="500" height="500" alt="1" src="https://github.com/user-attachments/assets/72416ff1-ee0e-49cd-ac1b-c5bfb16efaad" />
<img width="500" height="500" alt="2" src="https://github.com/user-attachments/assets/f56ccd82-c444-41b0-9489-b68e9481f161" />
<img width="500" height="500" alt="3" src="https://github.com/user-attachments/assets/34d46af0-f294-4ab2-9241-798ed66b32c0" />
<img width="500" height="500" alt="4" src="https://github.com/user-attachments/assets/891fc5cc-1c72-404d-aba8-0df032f64f7f" />
<img width="500" height="500" alt="5" src="https://github.com/user-attachments/assets/1ec63194-aae5-49f6-ab39-6938f86ca338" />
<img width="500" height="500" alt="6" src="https://github.com/user-attachments/assets/85cc3b27-231d-41dc-8c90-0a00ecff4d04" />
<img width="500" height="500" alt="7" src="https://github.com/user-attachments/assets/51b50dd7-01ed-413f-b8bf-5601d7c81030" />
<img width="500" height="500" alt="8" src="https://github.com/user-attachments/assets/63c995f3-6695-4ded-a478-a0410d80a317" />
<img width="500" height="500" alt="9" src="https://github.com/user-attachments/assets/da5a8989-ab36-40b9-b243-8b545711aee4" />

---

## 🎯 The Problem

Canadians frequently struggle with essential forms due to:

* Dense legal and bureaucratic language  
* Long, unstructured PDF documents  
* Ambiguous terminology and unclear requirements  
* Fear of making irreversible mistakes  
* Lack of accessible, trustworthy explanations  

These barriers disproportionately affect newcomers, students, low-income individuals, and anyone unfamiliar with legal or governmental processes.

---

## 🧠 Why Retrieval-Augmented Generation (RAG)?

Using a standard chatbot for legal or government forms is risky. Hallucinated or incorrect information can have real consequences.

Clarify uses RAG to prioritize accuracy and trust:

* Responses are generated **only after retrieving relevant document sections**
* The LLM is constrained to the uploaded form’s content
* Reduces hallucinations and unsupported claims
* Improves transparency and explainability

This makes Clarify suitable for high-stakes contexts where correctness matters more than creativity.

---

## 🛠️ Tech Stack

**Frontend**
* Next.js  
* React.js  
* TypeScript  
* Tailwind CSS  
* Zustand (state management)  
* Lucide-React (icons)

**Backend**
* Node.js  
* Express.js  
* TypeScript  

**AI & Document Intelligence**
* Retrieval-Augmented Generation (RAG)
* Vector embeddings for semantic document search

**Database**
* MongoDB Atlas  
* MongoDB Vector Search  
* Mongoose  

---

## 💡 How It Works

1. User uploads a government or legal PDF  
2. Document is parsed, chunked, and embedded  
3. Embeddings are stored in MongoDB Atlas  
4. User queries are embedded and matched semantically  
5. Relevant document sections are retrieved  
6. The LLM generates a response constrained to that context  

This architecture balances usability with reliability while remaining scalable.

---

## 🏆 Achievements

* Built a functional RAG system in under 24 hours  
* Implemented vector search using MongoDB Atlas  
* Designed for accessibility and public-service use cases  
* Delivered a polished, demo-ready gov-tech prototype  
* Demonstrated practical application of AI safety concepts  

---

## 🎓 What We Learned

* Implementing end-to-end RAG pipelines  
* Working with vector databases in production-like systems  
* Handling real-world PDF document complexity  
* Designing AI systems for trust and correctness  
* Rapid full-stack development under hackathon constraints  

---

## 🔮 Future Improvements

- [ ] Inline citations and source highlighting  
- [ ] Multi-language support (French priority)  
- [ ] OCR support for scanned documents  
- [ ] Document history and saved conversations  
- [ ] Stronger accessibility tooling and screen reader support  

---

## 👥 Team

* **Uzeyr Abdirahman** – [GitHub](https://github.com/uzeyr77) | [LinkedIn](https://www.linkedin.com/in/uzeyr-abdirahman)
* **Kurt Jallorina** – [GitHub](https://github.com/kurtjallo) | [LinkedIn](https://www.linkedin.com/in/kurtjallorina)
* **Bianca Javier** – [GitHub](https://github.com/biancacchino) | [LinkedIn](https://www.linkedin.com/in/biancajavier2006/)
* **Jason Tan** – [GitHub](https://github.com/Jason-Tan1) | [LinkedIn](https://www.linkedin.com/in/jasontan5)

---

## 🙏 Acknowledgments

* Hackville 2026 organizers and mentors  
* MongoDB Atlas for enabling scalable vector search  
* Open-source tools that made rapid experimentation possible  
* Anyone who has struggled to understand essential paperwork  

---

Built with care at Hackville 2026
