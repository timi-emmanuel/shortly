import { useState } from "react";

const ShortenForm = ({ onShorten }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url.trim()) {
      setError(true);
      return;
    }

    setError(false);
    setLoading(true);

    try {
      const isLocal = import.meta.env.DEV;

      const endpoint = isLocal
        ? "/api/v1/shorten"
        : "https://cleanuri.com/api/v1/shorten";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ url: url.trim() }),
      });

      if (!res.ok) {
        if (!navigator.onLine) {
          throw new Error("No internet connection.");
        }
        throw new Error("Failed to shorten the link. Please try again.");
      }

      const data = await res.json();

      if (data.error) throw new Error(data.error);

      const newLink = {
        original: url.trim(),
        shortened: data.result_url,
      };

      onShorten(newLink);
      setUrl("");
    } catch (err) {
      if (err.message === "Failed to fetch" && !navigator.onLine) {
        alert("No internet connection.");
      } else {
        alert(err.message || "Something went wrong.");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="-mt-12 w-[90%] md:w-[75%] p-6 mx-auto bg-darkViolet bg-[url('./assets/bg-shorten-desktop.svg')] bg-no-repeat bg-cover rounded-md">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center gap-4 md:gap-6"
      >
        <div className="w-full md:flex-1">
          <input
            type="text"
            placeholder="Shorten a link here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className={`w-full text-darkViolet py-3 px-6 rounded-md outline-none ${
              error ? "border-2 border-Red placeholder:text-Red" : ""
            }`}
          />
        </div>
        <div className="w-full md:w-auto">
          <button
            type="submit"
            disabled={loading}
            className="bg-cyan py-3 px-6 text-white font-bold text-lg md:text-sm rounded-md w-full md:w-auto hover:opacity-70"
          >
            {loading ? "Shortening..." : "Shorten It!"}
          </button>
        </div>
      </form>

      {error && (
        <p className="text-Red mt-2 text-sm italic">Please add a link</p>
      )}
    </section>
  );
};

export default ShortenForm;
