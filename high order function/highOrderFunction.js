const interviewQuestion = (name) => {
    if (name === "vinod") {
      return (topic) => {
        console.log(`Hi ${name}. What is ${topic}?. plz explain us `);
      }
    }
    
    if (name === "gupta") {
      return (topic) => {
        console.log(`Hi ${name}. What is ${topic}?. plz explain us `);
      }
    }
    
    if (name === "maani") {
      return (topic) => {
        console.log(`Hi ${name}. What is ${topic}?. plz explain us `);
      }
    }else{
      return () => {
        console.log("Welcome to interview")
      }
    }
  }
  
  
  interviewQuestion("vinod")("javascript")
  interviewQuestion("maani")("UI")
  interviewQuestion("gupta")("python")
  
  const candidate = interviewQuestion("vinod")
  candidate('ux')