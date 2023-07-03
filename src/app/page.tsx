import { TodoItem } from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

const getTodos = () => {
  return prisma.todo.findMany();
}

export default async function Home () {
  const todos = await getTodos()
  // const todoCreate = await prisma.todo.create({
  //   data: {
  //     title: "todo app",
  //     complete: false
  //   }
  // })
  // todoCreate
  // .then(async () => {
  //   await prisma.$disconnect();
  // })
  // .catch(async (e:any) => {
  //   console.error(e);
  //   await prisma.$disconnect()
  //   process.exit(1)
  // })
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/new">New</Link>
      </header>

      <ul className="pt-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  )
} 