-- CreateTable
CREATE TABLE "Quizz" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Quizz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "quizzId" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "correctOptionId" INTEGER NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnswerOption" (
    "id" SERIAL NOT NULL,
    "questionId" INTEGER NOT NULL,
    "option" TEXT NOT NULL,

    CONSTRAINT "AnswerOption_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Question_correctOptionId_key" ON "Question"("correctOptionId");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_quizzId_fkey" FOREIGN KEY ("quizzId") REFERENCES "Quizz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_correctOptionId_fkey" FOREIGN KEY ("correctOptionId") REFERENCES "AnswerOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswerOption" ADD CONSTRAINT "AnswerOption_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
