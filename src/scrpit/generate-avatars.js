// This is a build-time script to pre-generate AI avatars.
// Run this script using `node ./scripts/generate-avatars.js` before building the app.

import fs from 'fs';
import path from 'path';
import { team } from '../src/data/team.js';

// --- Helper Functions (simulated for this environment) ---

// In a real Node.js script, you would use a library like 'node-fetch'.
const fetch = async (url, options) => {
  console.log(`Fetching AI API: ${url}`);
  // This is a placeholder for the actual API call.
  // We'll return a mock response structure.
  return {
    ok: true,
    json: async () => ({
      predictions: [{
        bytesBase64Encoded: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=' // A transparent 1x1 pixel PNG
      }]
    })
  };
};

// --- Main Generation Logic ---

async function generateAvatar(prompt) {
  try {
    const payload = {
      instances: [{ prompt }],
      parameters: { "sampleCount": 1 }
    };
    const apiKey = process.env.API_KEY || ""; // Use environment variables for keys
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${apiKey}`;
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error(`API request failed`);
    
    const result = await response.json();
    if (result.predictions && result.predictions[0].bytesBase64Encoded) {
      return `data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`;
    }
    throw new Error('Invalid API response');
  } catch (error) {
    console.error(`Failed to generate avatar for prompt: "${prompt}"`, error);
    // Return a placeholder for failed generations
    return `https://placehold.co/100x100/CCCCCC/FFFFFF?text=Gen+Error`;
  }
}

async function main() {
  console.log('Starting avatar generation...');
  
  const generatedData = {};

  // Prompts for testimonials
  const testimonials = [
    { id: 'parent1', prompt: 'A friendly cartoon avatar of a mother, smiling.' },
    { id: 'parent2', prompt: 'A happy cartoon avatar of a mother, with short hair.' }
  ];

  // Generate avatars for team members
  for (const member of team) {
    console.log(`Generating for: ${member.name}`);
    generatedData[member.name] = await generateAvatar(member.avatarPrompt);
  }

  // Generate avatars for testimonials
  for (const testimonial of testimonials) {
    console.log(`Generating for: ${testimonial.id}`);
    generatedData[testimonial.id] = await generateAvatar(testimonial.prompt);
  }

  // Define the output path
  const outputPath = path.resolve(process.cwd(), 'src/data/generated-avatars.json');

  // Write the generated data to a JSON file
  fs.writeFileSync(outputPath, JSON.stringify(generatedData, null, 2));

  console.log(`Successfully generated avatars and saved to ${outputPath}`);
}

main();
