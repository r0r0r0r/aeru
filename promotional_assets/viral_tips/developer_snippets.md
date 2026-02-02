# ⚡️ AERU: STEAL THIS CODE

Want to go viral? Share value.
Here are two "Swipe to Copy" code snippets from the AERU build that you can post as a carousel.

## 📼 POST IDEA 1: The "Glitch" Ghost Button
**Headline:** "How to make buttons that feel dangerous."
**Caption:** "Stop using default shadow-md. Here is the exact CSS for the AERU brutalist button. Hard borders. Zero radius. Pure chaos."

```css
/* THE AERU BUTTON */
.btn-brutal {
  background: white;
  color: black;
  border: 3px solid black;
  font-weight: 900;
  text-transform: uppercase;
  /* The "Hard" Shadow */
  box-shadow: 6px 6px 0px black;
  transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}

.btn-brutal:hover {
  transform: translate(-2px, -2px);
  /* Grow the shadow */
  box-shadow: 10px 10px 0px black;
  background: #FF4D00; /* Signal Orange */
}

.btn-brutal:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px black;
}
```

---

## 🌀 POST IDEA 2: Kinetic Typography (Framer Motion)
**Headline:** "Make your text move."
**Caption:** "Static text is boring. Here is the Framer Motion recipe for the infinite marquees on AERU."

```tsx
import { motion } from "framer-motion";

const Marquee = ({ text }: { text: string }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-black text-white py-4">
      <motion.div
        className="font-black text-6xl uppercase tracking-tighter"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10, // Adjust speed here
        }}
      >
        {text} • {text} • {text} • {text}
      </motion.div>
    </div>
  );
};
```

---

## 💀 POST IDEA 3: The "Raw" Manifesto (ASCII Art)
**Headline:** "Text is texture."
**Caption:** "We added hidden ASCII art to the console. Inspect Element to find it."

```text
   __    ____  ____  __  __   
  /__\  ( ___)(  _ \(  )(  )  
 /(__)\  )__)  )   / )(__)(   
(__)(__)(____)(_)\_)(______)  
EST. 2026 // POP CULTURE™     
WE ARE NOT WATER.             
```
