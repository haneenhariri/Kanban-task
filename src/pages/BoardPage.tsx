import AddColumn from "../components/AddColumn/AddColumn";
import Column from "../components/Column/Column";
import Header from "../components/TaskBoardHeader/Header";

export default function BoardPage() {
  return (
    <section className="bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 min-h-screen overflow-hidden flex flex-col">
      <Header />
      <main className="flex flex-col sm:flex-row gap-2.5 py-5 px-5 sm:px-10">
        <Column/>
        <Column/>
        <AddColumn/>
      </main>
    </section>
  )
}
