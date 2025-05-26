import { pipeline } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.5.1';

const transcriber = await pipeline(
  'automatic-speech-recognition',
  'Xenova/whisper-tiny',
  { revision: 'main', quantized: true }
);

document.getElementById('fileInput').addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const resultElement = document.getElementById('result');
  resultElement.textContent = '🔄 Transcrevendo... Aguarde.';

  const audioData = await file.arrayBuffer();
  const output = await transcriber(audioData);

  resultElement.textContent = '📝 Transcrição:

' + output.text;
});