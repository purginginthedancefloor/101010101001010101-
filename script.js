html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
  background: #000;
  font-family: "Cinzel", serif;
}

#liquid-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.center-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 3;
}

.title {
  font-size: 3.5rem;
  color: #c6f7ff;
  text-shadow: 0 0 15px #51eaff;
  margin-bottom: 40px;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(-50%, -52%); }
  50% { transform: translate(-50%, -48%); }
}

.portal {
  width: 140px;
  height: 140px;
  margin: 0 auto;
  border-radius: 50%;
  background: radial-gradient(circle, #48e6ff, #0088b3, #002b40);
  box-shadow: 0 0 25px #00ffee, inset 0 0 25px #00ffee;
  animation: pulse 4s infinite ease-in-out;
  cursor: pointer;
}

.portal:hover {
  box-shadow: 0 0 35px #7af9ff, inset 0 0 35px #7af9ff;
  transform: scale(1.1);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.enter-text {
  margin-top: 20px;
  color: #bafaff;
  font-size: 1.2rem;
  letter-spacing: 2px;
  animation: fadeIn 3s infinite;
}

@keyframes fadeIn {
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
}
