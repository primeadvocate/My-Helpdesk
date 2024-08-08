import TicketsList from "./TicketsList";
import Loading from "../loading";
import { Suspense } from "react";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently Open Tickets.</small>
          </p>
        </div>
      </nav>
      <Suspense fallback={<Loading/>}>
        <TicketsList />
      </Suspense>
    </main>
  );
}
