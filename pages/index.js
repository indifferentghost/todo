import Link from "next/link";
import Header from "../components/header";
import { addTodo } from '../actions/todoActions';
import { useStateValue } from "../state";

function Index() {
  const [, dispatch] = useStateValue();

  return (
    <main>
      <Header />
      <section>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
        <button 
          onClick={() => addTodo(dispatch, { text: 'new todo' })}
        >blah</button>
      </section>
    </main>
  );
}

export default Index;
