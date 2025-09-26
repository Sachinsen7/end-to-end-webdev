"use-client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AlertTriangle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  const router = useRouter();
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [decounceValue, setDebounceValue] = useState(0);

  const handleSubmit = () => {};

  useEffect(() => {
    const timeout = setTimeout();
  });

  return (
    <section>
      <div>
        <h1>Erro Handler</h1>
      </div>

      <p>
        <aside>
          <div>
            <AlertTriangle />
          </div>
        </aside>
      </p>

      <></>
    </section>
  );
}
