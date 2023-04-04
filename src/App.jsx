import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Diabetes, ¿qué es eso?",
      answers: [
        {
          text: "Altos niveles de azúcar en la sangre, cuando el páncreas deja de producir insulina",
          correct: true,
        },
        {
          text: "Diferente condición de vida",
          correct: false,
        },
        {
          text: "Una enfermedad mortal",
          correct: false,
        },
        {
          text: "Un virus que ataca el páncreas",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "¿Qué cargo ocupa la insulina en el cuerpo?",
      answers: [
        {
          text: "Dejarte ciego",
          correct: false,
        },
        {
          text: "La insulina ayuda a transformar los alimentos",
          correct: false,
        },
        {
          text: "Ayuda a distribuir los alimentos por todo el cuerpo",
          correct: false,
        },
        {
          text: "Regula los niveles de glucosa",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "¿Por qué un niño/a con diabetes tipo 1 debe depender de insulina?",
      answers: [
        {
          text: "Porque sin insulina las células no tienen azúcar de donde sacar energía",
          correct: false,
        },
        {
          text: "Porque  permite  llevar una vida saludable",
          correct: false,
        },
        {
          text: "Porque sin insulina en el cuerpo, el azúcar se amontona en la sangre",
          correct: true,
        },
        {
          text: "Todas las anteriores",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "¿Qué sucede cuando un niño con diabetes tipo 1 no se inyecta insulina?",
      answers: [
        {
          text: "Glucosa por encima de 300 y ningún otro síntoma",
          correct: false,
        },
        {
          text: "Feliz, quiere, jugar y aprender",
          correct: true,
        },
        {
          text: "Daño en el cuerpo, cara amarillenta y ojos vidriosos",
          correct: false,
        },
        {
          text: "Dolor de barriga, decaimiento, malestar general, glucosa elevada",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "¿Cuáles son los síntomas de hipoglicemia?",
      answers: [
        {
          text: "Dolor de piernas. Dolor de pecho",
          correct: false,
        },
        {
          text: "Visión borrosa, Debilidad y cansancio",
          correct: true,
        },
        {
          text: "Orinar frecuentemente y Ansiedad",
          correct: false,
        },
        {
          text: "Congestión nasal, Dolor de cabeza",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "¿Cuáles son los síntomas de hiperglicemia?",
      answers: [
        {
          text: "Demasiada sed y hambre",
          correct: true,
        },
        {
          text: "Escalofríos y sueño",
          correct: false,
        },
        {
          text: "Ojos saltones y visión borrosa",
          correct: false,
        },
        {
          text: "Orina con frecuencia y riñones adoloridos",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "¿Qué es la glucosa?",
      answers: [
        {
          text: "Una célula",
          correct: false,
        },
        {
          text: "La sangre",
          correct: false,
        },
        {
          text: "Es la palabra médica",
          correct: false,
        },
        {
          text: "Un tipo de azúcar que el cuerpo usa como fuente de energía",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "¿Por qué se debe medir la glucosa antes de cada comida?",
      answers: [
        {
          text: "Para saber un número y si no te mides no puedes comer",
          correct: false,
        },
        {
          text: "Para saber cuánta insulina tienes que inyectarte",
          correct: true,
        },
        {
          text: "Para ver si estas bajo o alto",
          correct: false,
        },
        {
          text: "Porque tu médico te dijo que tienes que medirte",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "¿Qué es el páncreas?",
      answers: [
        {
          text: "Un objeto",
          correct: false,
        },
        {
          text: "Una glándula",
          correct: false,
        },
        {
          text: "Una hormona",
          correct: false,
        },
        {
          text: "Un órgano del cuerpo el cual es el encargado de producir insulina",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "¿Qué es la insulina?",
      answers: [
        {
          text: "Una herramienta",
          correct: false,
        },
        {
          text: "Una vacuna",
          correct: false,
        },
        {
          text: "Es una hormona que permite a la glucosa de la sangre entrar a las células",
          correct: true,
        },
        {
          text: "Una droga que te deja ciego",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: " ¿Cada cuánto se debe hacer el examen de hemoglobina glicosilada?",
      answers: [
        {
          text: "Cada año",
          correct: false,
        },
        {
          text: "Cada 3 meses",
          correct: true,
        },
        {
          text: "Cada 4 meses",
          correct: false,
        },
        {
          text: "Cada 6 meses",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "El conteo de carbohidratos es una herramienta que permite principalmente:",
      answers: [
        {
          text: "Comer el alimento que uno desee",
          correct: false,
        },
        {
          text: "Controlar las glicemias",
          correct: false,
        },
        {
          text: "Ajustar la insulina a la cantidad de carbohidratos",
          correct: true,
        },
        {
          text: "Mejorar los niveles de la Hemoglobina Glicosilada HbA1c",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "La manera adecuada de consumir frutas es:",
      answers: [
        {
          text: "En forma de jugo ",
          correct: false,
        },
        {
          text: "Cocinada ",
          correct: false,
        },
        {
          text: "Pelada",
          correct: false,
        },
        {
          text: "Ninguna de las anteriores",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "Que efectos tiene el ejercicio sobre el nivel de glucosa en sangre",
      answers: [
        {
          text: "Aumenta la absorción de la insulina",
          correct: true,
        },
        {
          text: "Aumenta la glucosa en el cuerpo   ",
          correct: false,
        },
        {
          text: "Actúa como insulina y no es necesario aplicarse",
          correct: false,
        },
        {
          text: "Todas las anteriores",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Los productos light son:",
      answers: [
        {
          text: "Alimentos fortificados con vitaminas y minerales, que no contiene nada de grasa",
          correct: false,
        },
        {
          text: "Alimentos que no contienen azúcar, grasa ni carbohidratos",
          correct: false,
        },
        {
          text: "Alimentos que toda persona con DM1 siempre debe comerlos",
          correct: false,
        },
        {
          text: "Ninguna de las anteriores",
          correct: true,
        },
      ],
    },
    {
      id: 16,
      question: "Un hábito saludable para la alimentación de la persona con diabetes consiste en:",
      answers: [
        {
          text: "Tomar 2 vasos de agua al día",
          correct: false,
        },
        {
          text: "Respetar la cantidad y el horario de las comidas ",
          correct: true,
        },
        {
          text: "Fraccionar la alimentación a cada hora",
          correct: false,
        },
        {
          text: "Todas las anteriores",
          correct: false,
        },
      ],
    },
    {
      id: 17,
      question: "Que efectos tiene el ejercicio sobre el nivel de glucosa en sangre:",
      answers: [
        {
          text: "Aumenta la absorción de la insulina",
          correct: true,
        },
        {
          text: "Aumenta la glucosa en el cuerpo",
          correct: false,
        },
        {
          text: "Actúa como insulina y no es necesario aplicarse",
          correct: false,
        },
        {
          text: "Todas las anteriores",
          correct: false,
        },
      ],
    },
    {
      id: 18,
      question: "Después del ejercicio intenso:",
      answers: [
        {
          text: "Existe un riesgo mayor de hipoglicemia varias horas más tarde",
          correct: true,
        },
        {
          text: "Existe un riesgo mayor de hiperglicemia en el momento de hacer ejercicio",
          correct: false,
        },
        {
          text: "Existe la probabilidad de producir una cetoacidosis",
          correct: false,
        },
        {
          text: "Tener un coma diabético",
          correct: false,
        },
      ],
    },
    {
      id: 19,
      question: " Al hacer ejercicio es importante hidratarse:",
      answers: [
        {
          text: "Antes de realizar la actividad ",
          correct: false,
        },
        {
          text: "Durante la actividad",
          correct: false,
        },
        {
          text: "Después de la actividad",
          correct: false,
        },
        {
          text: "Todas las anteriores",
          correct: true,
        },
      ],
    },
    {
      id: 20,
      question: "Puede el ejercicio aumentar el nivel de glucosa en sangre:",
      answers: [
        {
          text: "Si",
          correct: true,
        },
        {
          text: "No",
          correct: false,
        },
        {
          text: "Las dos respuestas anteriores son correctas",
          correct: false,
        },
        {
          text: "Ninguna de las anteriores",
          correct: false,
        },
      ],
    },
    {
      id: 21,
      question: " Una persona con diabetes está resolviendo una prueba escolar que situación puede ocurrirle:",
      answers: [
        {
          text: "El estrés puede elevar los niveles de glucosa en sangre",
          correct: false,
        },
        {
          text: "Puedo experimentar dificultades de concentracióno",
          correct: false,
        },
        {
          text: " Debe medir la glucosa y saber si es necesario comer algo",
          correct: false,
        },
        {
          text: "Todas las anteriores",
          correct: true,
        },
      ],
    },
    {
      id: 22,
      question: " Cuando el nivel de glucosa en la sangre es alta con frecuencia se experimenta:",
      answers: [
        {
          text: "Menos hambre",
          correct: false,
        },
        {
          text: "Más hambre",
          correct: true,
        },
        {
          text: "No se siente nada",
          correct: false,
        },
        {
          text: "Ninguna de las anteriores",
          correct: false,
        },
      ],
    },
    {
      id: 23,
      question: "El llamado “fenómeno del alba” o “fenómeno del amanecer” hace referencia a:",
      answers: [
        {
          text: "Niveles de glucosa elevadas por la mañana",
          correct: true,
        },
        {
          text: "Niveles de glucosa bajas por la tarde",
          correct: false,
        },
        {
          text: "Niveles de glucosa bajos por las madrugadas",
          correct: false,
        },
        {
          text: "Ninguna de las anteriores",
          correct: false,
        },
      ],
    },
    {
      id: 24,
      question: "Cuando el nivel de glucosa en sangres es alto:",
      answers: [
        {
          text: "El estómago no se vacía",
          correct: false,
        },
        {
          text: "El estómago se vacía rápidamente",
          correct: false,
        },
        {
          text: "El estómago se vacía lentamente",
          correct: true,
        },
        {
          text: "Ninguna de las anteriores",
          correct: false,
        },
      ],
    },
    {
      id: 25,
      question: "La absorción de insulina:",
      answers: [
        {
          text: "Es más rápido en el brazo que en otra zona",
          correct: false,
        },
        {
          text: "Es más rápido en las nalgas que en el abdomen",
          correct: false,
        },
        {
          text: "Es más rápido en los muslos",
          correct: false,
        },
        {
          text: "Es más rápido en el abdomen que en otra zona",
          correct: true,
        },
      ],
    },
    /*{
      id: 15,
      question: "La insulina humana para no perder su acción:",
      answers: [
        {
          text: "Debe estar almacenada en la oscuridad",
          correct: false,
        },
        {
          text: "Debe mantenerse a temperatura ambiente (sin exponerle al sol",
          correct: true,
        },
        {
          text: "Debe estar en el congelador",
          correct: false,
        },
        {
          text: "No importa si la dejo al sol",
          correct: false,
        },
      ],
    },
    {
      id: 16,
      question: "Si tienes vómito sin diarrea son síntomas frecuentes de:",
      answers: [
        {
          text: "Deficiencia de insulina por un tiempo prolongado",
          correct: true,
        },
        {
          text: "Una hiperglicemia",
          correct: false,
        },
        {
          text: "Consumo de un alimento en mal estado",
          correct: false,
        },
        {
          text: "Ninguna de las anteriores",
          correct: false,
        },
      ],
  
    },*/
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 25" },
        { id: 2, amount: "$ 50" },
        { id: 3, amount: "$ 75" },
        { id: 4, amount: "$ 100" },
        { id: 5, amount: "$ 150" },
        { id: 6, amount: "$ 200" },
        { id: 7, amount: "$ 250" },
        { id: 8, amount: "$ 300" },
        { id: 9, amount: "$ 350" },
        { id: 10, amount: "$ 400" },
        { id: 11, amount: "$ 450" },
        { id: 12, amount: "$ 500" },
        { id: 13, amount: "$ 550" },
        { id: 14, amount: "$ 600" },
        { id: 15, amount: "$ 650" },
        { id: 16, amount: "$ 700" },
        { id: 17, amount: "$ 750" },
        { id: 18, amount: "$ 800" },
        { id: 19, amount: "$ 850" },
        { id: 20, amount: "$ 900" },
        { id: 21, amount: "$ 950" },
        { id: 22, amount: "$ 1000" },
        { id: 23, amount: "$ 2000" },
        { id: 24, amount: "$ 3000" },
        { id: 25, amount: "$ 5000" },
      
       
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
