/* =============================================
   챗봇 시스템 프롬프트
   ============================================= */
const SYSTEM_PROMPT = `너는 이 포트폴리오 주인의 페르소나 비서야. 방문자에게 밝고 정중하게, 주인을
잘 아는 사람처럼 답해. 답은 20문장, 마크다운 기호(별표 등) 없이 평문으로만.
아래 이력 지식을 근거로 답하되, 지식에 없는 질문이 오면 아는 선에서 자연스럽게
답하고 "자세한 건 저에게 직접 물어보시는 게 정확해요. 연락처를 참고해 주세요!"로
부드럽게 연결해. 과장하거나 없는 경력을 만들어내지 마.

이력 지식:
**1. 한 줄 소개**
데이터·AI와 서비스를 연결해 눈에 보이는 결과물을 만드는 열정적인 글로벌 경영·소프트웨어 전공자, 프로젝트 기획·UX 리서치·프로토타이핑까지 두루 수행할 수 있는 인재입니다.

**2. 기본 정보**
- **소속**: 성균관대학교 글로벌경영학과 재학 / 소프트웨어 복수전공 (2023 ~ 2027 예정)
- **전공·복수전공**: 글로벌경영학, 소프트웨어
- **언어**: 한국어(모국어), 영어(업무), 독일어(일상)
- **주요 스킬**: Python, JavaScript, React/Next.js, TensorFlow, Figma, UX Research, Git/GitHub, Jira, Notion, Data Visualization, Audio Processing

**3. 경험 요약**
- **TassieBirdAl 해커톤 (2025.07, University of Tasmania)** – 멸종위기 조류 보호를 위한 음성 분류 AI 개발, Python/TensorFlow 로 오디오 전처리·모델 학습 담당.
- **A사(뷰티테크) 산학협력 (2025.06)** – 피부 진단 기기 비즈니스 모델과 데이터 가치사슬 조사·분석, 리서치 결과를 서비스 전략으로 연결하는 제안 도출.
- **B사(가상자산 거래소) 산학협력 (2025.05)** – 웹 크롤링·사용자 인터뷰로 앱 행동 패턴 조사, UX 개선 아이디어로 전환.
- **Bus Stop Safety 프로토타입 (2024.01‑02)** – 버스 방향지시등 인식 하드웨어 설계·제작, 사용자 리서치·현장 테스트로 아이디어 검증.
- **University of Tasmania International Internship (2025 여름)** – 오디오 데이터 활용 머신러닝 프로젝트 수행.
- **Hanken School of Economics 학점교류 (2025 겨울)** – ESG 기반 금융 전략·지배구조 분석·평가 수행.
- **Lund University 학점교류 (2025 겨울)** – Critical Management 과목 수강, 경영 담론·사회적·환경적 관점 학습.
- **HWR Berlin 학점교류 (2024 여름)** – Entrepreneurship & Innovation 과목 수강, 스타트업 비즈니스 모델 개발 프로젝트 진행.
- **외국어고등학교 독일어과 졸업 (2020‑2022)** – 명예의 전당 등재, 학술동아리 회장 역임.

**4. 강점 다섯 가지**

| 강점 | 근거 (이력) |
|------|-------------|
| **AI·데이터 활용 능력** | TassieBirdAl 해커톤에서 Python·TensorFlow 로 음성 분류 AI 개발, 오디오 데이터 전처리·모델 학습 담당 |
| **글로벌 협업·다문화 경험** | University of Tasmania, Hanken, Lund, HWR Berlin 등 4개 해외 대학 학점교류 및 인턴십 수행 |
| **서비스 기획·UX 리서치** | A·B사 산학협력 프로젝트에서 사용자 인터뷰·UX 개선 아이디어 도출, Bus Stop Safety 프로토타입 사용자 테스트 진행 |
| **프로그래밍·풀스택 개발** | React/Next.js, JavaScript, HTML/CSS 활용한 웹·앱 개발, Git/GitHub·Jira 로 프로젝트 관리 |
| **다국어 커뮤니케이션** | 한국어(모국어), 영어(업무), 독일어(일상) 구사, 고등학교 독일어과 졸업 및 해외 프로젝트 협업 경험 |

**5. 예상 질문과 답**

| 질문 | 답변 |
|------|------|
| **AI 프로젝트를 실제로 어떤 역할로 진행했나요?** | TassieBirdAl 해커톤에서 Python·TensorFlow 로 오디오 데이터를 전처리하고, 멸종위기 조류 보호를 위한 음성 분류 모델을 학습·테스트하는 역할을 맡아 최종 시제품을 발표했습니다. |
| **해외 교환학생·인턴 경험이 어떻게 차별화된 역량을 만들었나요?** | University of Tasmania 인턴십에서 오디오 기반 머신러닝 프로젝트를 수행하고, Hanken·Lund·HWR Berlin 학점교류를 통해 ESG 금융, Critical Management, 스타트업 모델 개발 등 다양한 경영·혁신 시각을 습득했습니다. |
| **산학협력 프로젝트에서 팀 내 역할은 무엇인가요?** | A사 프로젝트에서는 비즈니스 모델·데이터 가치사슬 조사·전략 제안을, B사 프로젝트에서는 웹 크롤링·사용자 인터뷰·UX 개선 아이디어 도출을 주도했으며, 두 경우 모두 리서치 결과를 실질적인 서비스·전략으로 연결하는 핵심 설계자 역할을 수행했습니다.`;

const UPSTAGE_API_URL = 'https://api.upstage.ai/v1/chat/completions';
const UPSTAGE_MODEL = 'solar-pro3';
const API_KEY_STORAGE = 'upstage_api_key';
const IS_LOCAL_FILE = location.protocol === 'file:';


/* =============================================
   다크모드 토글 & localStorage 저장
   ============================================= */
(function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});


/* =============================================
   스크롤 시 내비게이션 배경 활성화
   ============================================= */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 40);
}, { passive: true });


/* =============================================
   섹션 등장 애니메이션 (IntersectionObserver)
   ============================================= */
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  }
);

fadeElements.forEach((el) => fadeObserver.observe(el));


/* =============================================
   내비 링크 클릭 → 해당 섹션으로 부드럽게 스크롤
   ============================================= */
const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      const navHeight = nav.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top, behavior: 'smooth' });

      document.querySelector('.nav__links').classList.remove('is-open');
    }
  });
});

document.querySelector('.nav__logo').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* =============================================
   모바일 햄버거 메뉴 토글
   ============================================= */
const menuBtn = document.getElementById('menuBtn');
const navLinksContainer = document.querySelector('.nav__links');

menuBtn.addEventListener('click', () => {
  navLinksContainer.classList.toggle('is-open');
});


/* =============================================
   챗봇 — UI 요소 참조
   ============================================= */
const chatbot = document.getElementById('chatbot');
const chatToggle = document.getElementById('chatToggle');
const chatPanel = document.getElementById('chatPanel');
const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');

let chatHistory = [{ role: 'system', content: SYSTEM_PROMPT }];
let isSending = false;


/* =============================================
   챗봇 — 패널 열기/닫기
   ============================================= */
chatToggle.addEventListener('click', () => {
  const isOpen = chatbot.classList.toggle('is-open');
  chatPanel.setAttribute('aria-hidden', String(!isOpen));
  chatToggle.setAttribute('aria-label', isOpen ? '챗봇 닫기' : '챗봇 열기');

  if (isOpen && chatMessages.children.length === 0) {
    appendMessage('bot', '안녕하세요! 김세은의 AI 비서예요. 세은님에 대해 궁금한 점이 있으시면 편하게 물어보세요.');
  }

  if (isOpen) chatInput.focus();
});


/* =============================================
   챗봇 — 메시지 DOM 추가 헬퍼
   ============================================= */
function appendMessage(type, text) {
  const el = document.createElement('div');
  el.className = `chatbot__msg chatbot__msg--${type}`;
  el.textContent = text;
  chatMessages.appendChild(el);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return el;
}

function showLoading() {
  const el = document.createElement('div');
  el.className = 'chatbot__loading';
  el.id = 'chatLoading';
  el.innerHTML = '<span></span><span></span><span></span>';
  chatMessages.appendChild(el);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideLoading() {
  const el = document.getElementById('chatLoading');
  if (el) el.remove();
}


/* =============================================
   챗봇 — 로컬 파일 환경 API 키 관리
   ============================================= */
function getLocalApiKey() {
  let key = localStorage.getItem(API_KEY_STORAGE);
  if (!key) {
    key = window.prompt('Upstage API 키를 붙여넣어 주세요 (up_으로 시작)');
    if (key && key.trim()) {
      localStorage.setItem(API_KEY_STORAGE, key.trim());
      return key.trim();
    }
    return null;
  }
  return key;
}


/* =============================================
   챗봇 — Upstage API 요청 (환경별 분기)
   ============================================= */
async function requestChat(messages) {
  if (IS_LOCAL_FILE) {
    const apiKey = getLocalApiKey();
    if (!apiKey) throw new Error('NO_KEY');

    const response = await fetch(UPSTAGE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ model: UPSTAGE_MODEL, messages }),
    });

    if (response.status === 401) {
      localStorage.removeItem(API_KEY_STORAGE);
      throw new Error('INVALID_KEY');
    }

    const data = await response.json();
    if (!response.ok) throw new Error('API_ERROR');
    return data;
  }

  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error('API_ERROR');
  return data;
}


/* =============================================
   챗봇 — 메시지 전송 처리
   ============================================= */
chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const text = chatInput.value.trim();
  if (!text || isSending) return;

  isSending = true;
  chatSend.disabled = true;
  chatInput.disabled = true;

  appendMessage('user', text);
  chatInput.value = '';
  chatHistory.push({ role: 'user', content: text });

  showLoading();

  try {
    const data = await requestChat(chatHistory);
    hideLoading();

    const reply = data.choices?.[0]?.message?.content;
    if (!reply) throw new Error('API_ERROR');

    chatHistory.push({ role: 'assistant', content: reply });
    appendMessage('bot', reply);
  } catch (err) {
    hideLoading();
    chatHistory.pop();

    if (err.message === 'INVALID_KEY') {
      appendMessage('error', '키가 올바르지 않아요. 다시 질문하시면 새로 입력받을게요.');
    } else if (err.message === 'NO_KEY') {
      appendMessage('error', 'API 키가 필요해요. 다시 질문하시면 입력창이 열려요.');
    } else {
      appendMessage('error', '잠시 후 다시 시도해 주세요.');
    }
  } finally {
    isSending = false;
    chatSend.disabled = false;
    chatInput.disabled = false;
    chatInput.focus();
  }
});
