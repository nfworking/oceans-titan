"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

// Quiz questions data
const quizQuestions = [
  {
    id: 1,
    question: "What percentage of the ocean floor do coral reefs cover?",
    options: [
      { id: "a", text: "Less than 1%" },
      { id: "b", text: "About 10%" },
      { id: "c", text: "About 25%" },
      { id: "d", text: "More than 50%" },
    ],
    correctAnswer: "a",
    explanation:
      "Despite covering less than 1% of the ocean floor, coral reefs are home to more than 25% of marine species!",
  },
  {
    id: 2,
    question: "What do coral polyps need to build their skeletons?",
    options: [
      { id: "a", text: "Sand" },
      { id: "b", text: "Calcium carbonate" },
      { id: "c", text: "Salt" },
      { id: "d", text: "Plankton" },
    ],
    correctAnswer: "b",
    explanation:
      "Coral polyps extract calcium and carbonate from seawater to build their hard skeletons, which form the structure of coral reefs.",
  },
  {
    id: 3,
    question: "What causes coral bleaching?",
    options: [
      { id: "a", text: "Pollution from sunscreen" },
      { id: "b", text: "Natural aging of coral" },
      { id: "c", text: "Rising ocean temperatures" },
      { id: "d", text: "Predatory fish" },
    ],
    correctAnswer: "c",
    explanation:
      "When ocean temperatures rise, corals expel the colorful algae living in their tissues, causing them to turn white or 'bleach'. If the stress continues, the coral will die.",
  },
  {
    id: 4,
    question: "Which of these is NOT a type of coral reef?",
    options: [
      { id: "a", text: "Fringing reef" },
      { id: "b", text: "Barrier reef" },
      { id: "c", text: "Mountain reef" },
      { id: "d", text: "Atoll" },
    ],
    correctAnswer: "c",
    explanation:
      "The three main types of coral reefs are fringing reefs, barrier reefs, and atolls. 'Mountain reef' is not a type of coral reef.",
  },
  {
    id: 5,
    question: "How old can some coral reefs be?",
    options: [
      { id: "a", text: "Up to 100 years" },
      { id: "b", text: "Up to 1,000 years" },
      { id: "c", text: "Up to 10,000 years" },
      { id: "d", text: "Up to 50 million years" },
    ],
    correctAnswer: "d",
    explanation:
      "Some coral reefs are ancient, with the oldest reef systems dating back 50 million years. The Great Barrier Reef is between 6,000 and 8,000 years old.",
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState("")
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleOptionSelect = (value: string) => {
    if (!isAnswered) {
      setSelectedOption(value)
    }
  }

  const checkAnswer = () => {
    setIsAnswered(true)
    if (selectedOption === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption("")
      setIsAnswered(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedOption("")
    setIsAnswered(false)
    setScore(0)
    setQuizCompleted(false)
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-4xl font-bold text-teal-400">Coral Reef Quiz</h1>
            <p className="text-gray-300">Test your knowledge about coral reefs and marine conservation!</p>
          </div>

          {!quizCompleted ? (
            <Card className="border-gray-800 bg-gray-900">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-white">
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Score: {score} / {quizQuestions.length}
                    </CardDescription>
                  </div>
                  <div className="w-24">
                    {/* Force the green color with !important */}
                    <Progress value={progress} className="h-2 bg-gray-700" indicatorClassName="!bg-green-500" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className="mb-4 text-xl font-medium text-white">{quizQuestions[currentQuestion].question}</h3>
                  <RadioGroup value={selectedOption} className="space-y-3">
                    {quizQuestions[currentQuestion].options.map((option) => (
                      <div
                        key={option.id}
                        className={cn(
                          "flex items-center space-x-2 rounded-md border p-3 transition-colors",
                          isAnswered &&
                            option.id === quizQuestions[currentQuestion].correctAnswer &&
                            "border-green-500 bg-green-500/10",
                          isAnswered &&
                            selectedOption === option.id &&
                            option.id !== quizQuestions[currentQuestion].correctAnswer &&
                            "border-red-500 bg-red-500/10",
                          !isAnswered && selectedOption === option.id && "border-teal-500 bg-teal-900/20",
                          !isAnswered &&
                            selectedOption !== option.id &&
                            "border-gray-700 hover:border-gray-600 hover:bg-gray-800",
                        )}
                        onClick={() => handleOptionSelect(option.id)}
                      >
                        <RadioGroupItem
                          value={option.id}
                          id={`option-${option.id}`}
                          disabled={isAnswered}
                          className="border-gray-600"
                        />
                        <Label htmlFor={`option-${option.id}`} className="w-full cursor-pointer font-normal text-white">
                          {option.text}
                        </Label>
                        {isAnswered && option.id === quizQuestions[currentQuestion].correctAnswer && (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        )}
                        {isAnswered &&
                          selectedOption === option.id &&
                          option.id !== quizQuestions[currentQuestion].correctAnswer && (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="rounded-md bg-teal-900/30 p-4 text-teal-200"
                  >
                    <p>{quizQuestions[currentQuestion].explanation}</p>
                  </motion.div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                {!isAnswered ? (
                  <Button onClick={checkAnswer} disabled={!selectedOption} className="bg-teal-600 hover:bg-teal-700">
                    Check Answer
                  </Button>
                ) : (
                  <Button onClick={nextQuestion} className="bg-teal-600 hover:bg-teal-700">
                    {currentQuestion < quizQuestions.length - 1 ? (
                      <>
                        Next Question <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      "See Results"
                    )}
                  </Button>
                )}
              </CardFooter>
            </Card>
          ) : (
            <Card className="border-gray-800 bg-gray-900">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-white">Quiz Completed!</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-teal-600/20">
                    <span className="text-4xl font-bold text-teal-400">
                      {score}/{quizQuestions.length}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-medium text-white">
                    {score === quizQuestions.length
                      ? "Perfect Score! You're a Coral Reef Expert!"
                      : score >= quizQuestions.length / 2
                        ? "Great job! You know your coral reefs!"
                        : "Good effort! Keep learning about coral reefs!"}
                  </h3>
                  <p className="text-gray-300">
                    Thank you for taking the quiz and learning more about coral reefs and their importance to our
                    oceans.
                  </p>
                </div>

                <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                  <Button
                    onClick={resetQuiz}
                    variant="outline"
                    className="border-teal-600 text-teal-400 hover:bg-teal-950"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" /> Take Quiz Again
                  </Button>
                  <Button className="bg-teal-600 hover:bg-teal-700">Explore 3D Gallery</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
