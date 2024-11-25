export const useTypewriter = (text: string, speed: number) => {
  const [displayText, setDisplayText] = useState("");
  const idx = useRef(0);
  const displayTextRef = useRef("");
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (idx.current < text.length) {
        displayTextRef.current += text.charAt(idx.current);
        setDisplayText(() => displayTextRef.current);
        idx.current += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);
    return () => {
      setDisplayText("");
      clearInterval(typingInterval);
    };
  }, [text, speed]);
  return displayText;
};
