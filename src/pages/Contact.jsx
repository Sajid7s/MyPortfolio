import { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio inquiry: ${formData.get("subject")}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`,
    );

    window.location.href = `mailto:sajids9989@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-white px-6 pb-32 pt-24 text-black sm:px-10">
      <section className="mx-auto grid w-full max-w-6xl gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div className="flex flex-col justify-center">
          <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Contact
          </p>
          <h1 className="max-w-xl text-5xl font-semibold leading-tight sm:text-6xl">
            Looking for
            <span className="block text-blue-500">my first role.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-zinc-400">
            I&apos;m a fresher seeking an entry-level developer role. I&apos;m
            ready to contribute, learn from an experienced team, and grow
            through real-world work. I&apos;d be happy to hear about suitable
            opportunities.
          </p>
          <div className="mt-10 border-l border-blue-500/70 pl-4">
            <p className="text-sm text-zinc-500">Currently looking for</p>
            <p className="mt-1 font-medium text-grey-100">
              Entry-level roles, internships, and graduate opportunities
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 border border-zinc-800 bg-zinc-950 p-6 sm:p-9"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
              Your name
              <input
                autoComplete="name"
                className="h-12 border border-zinc-800 bg-black px-4 text-base text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-red-500"
                name="name"
                placeholder="Jane Smith"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
              Your email
              <input
                autoComplete="email"
                className="h-12 border border-zinc-800 bg-black px-4 text-base text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-red-500"
                name="email"
                placeholder="jane@example.com"
                required
                type="email"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
            Subject
            <input
              className="h-12 border border-zinc-800 bg-black px-4 text-base text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-red-500"
              name="subject"
              placeholder="Entry-level opportunity"
              required
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
            Message
            <textarea
              className="min-h-40 resize-y border border-zinc-800 bg-black px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-red-500"
              name="message"
              placeholder="Tell me a little about it..."
              required
              rows={5}
            />
          </label>

          <button
            className="inline-flex min-h-12 items-center justify-center gap-2 self-start bg-blue-600 px-6 font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400"
            type="submit"
          >
            {sent ? "Open email draft again" : "Get in touch"}
            <span aria-hidden="true">&rarr;</span>
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
