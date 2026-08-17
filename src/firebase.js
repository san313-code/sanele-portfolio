import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBVf7Fnjz7GDfkKtEXWpmMKKyuGlFp31Bw',
  authDomain: 'sanele-portfolio.firebaseapp.com',
  projectId: 'sanele-portfolio',
  storageBucket: 'sanele-portfolio.firebasestorage.app',
  messagingSenderId: '275444988805',
  appId: '1:275444988805:web:9f44562e3dc6f4a3a1a2ec',
  measurementId: 'G-YEQ4WFJ9GS'
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export { app, analytics, db }
