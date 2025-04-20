import { useThemeContext } from "@/components/ThemeProvider";
import emailJS from "@emailjs/browser";
import { Alert, Box, Snackbar } from "@mui/material";
import React, { useRef, useState } from "react";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Gmail from "@mui/icons-material/Google";
import Twitter from "@mui/icons-material/X";
import Link from "next/link";

const Contact = () => {
  const component = useRef(null);
  const { mode } = useThemeContext();
  const formRef = useRef(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const nameColor = mode === "dark" ? "text-slate-300" : "text-slate-800";
  const subNameColor = mode === "dark" ? "text-slate-500" : "text-slate-300";
  const backColor =
    mode === "dark"
      ? "bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500"
      : "bg-gradient-to-tr from-amber-600 via-pink-600 to-purple-800";

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showSnackbar = (message: string, severity: "success" | "error") => {
    setSnackbar({ open: true, message, severity });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
      !formRef.current
    ) {
      throw new Error("Missing required EmailJS environment variables.");
    }

    emailJS
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showSnackbar("Message sent! I will get back to you soon.", "success");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("Failed to send:", error);
          showSnackbar(
            "Oops! Something went wrong. Please try again.",
            "error"
          );
        }
      );
  };

  return (
    <Box
      sx={{
        mt: { xs: 2, sm: 20, md: 5, lg: 5 },
        px: { xs: 2, sm: 3, md: 4 },
        textAlign: "center",
      }}
      ref={component}
    >
      <h5
        className="mb-4 text-center text-[clamp(0.5rem, 1.5vmin, 0.5rem)] font-medium leading-tight tracking-tight md:mb-0"
        aria-label={"Get To Know More"}
      >
        <span className={`block ${subNameColor}`}>Reach Out</span>
      </h5>

      <h1
        className="text-center text-[clamp(2rem,10vmin,10rem)] font-bold leading-none tracking-tighter md:mb-0"
        aria-label={"About Me."}
      >
        <span className={`block ${nameColor}`}>Say Hello</span>
      </h1>

      <section
        className="flex items-center justify-center w-full h-full"
        style={{
          transform: "scale(0.9)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          width: "100%",
        }}
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="rounded-2xl w-full max-w-sm"
        >
          <input
            type="text"
            value={form.name}
            name="name"
            onChange={handleChange}
            placeholder="Kindly enter your name"
            className={`w-full px-4 py-2 mb-8 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2`}
          />

          <input
            type="email"
            value={form.email}
            name="email"
            onChange={handleChange}
            placeholder="Please provide a valid email"
            className={`w-full px-4 py-2 mb-8 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2`}
          />

          <textarea
            value={form.message}
            onChange={handleChange}
            name="message"
            placeholder="Please include your message or question"
            rows={5}
            className="w-full px-4 py-2 mb-8 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 resize-none"
          />

          <button
            type="submit"
            className={`w-full ${backColor} hover:${backColor} ${
              mode === "dark" ? "text-black" : "text-white"
            } font-semibold py-2 rounded-lg transition`}
            disabled={form.email === "" ? true : false}
          >
            {loading ? "Sending..." : "Connect"}
          </button>

          <div className="mt-10 space-x-20">
            <Link
              title="LinkedIn"
              href="linkedin.com/in/kishan-shetty-5aba94163"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn fontSize="large" />
            </Link>

            <Link
              title="Twitter"
              href="https://x.com/KishanShetty199"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter fontSize="large" />
            </Link>

            <Link
              title="Gmail"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=me.kishanshetty@gmail.com"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Gmail fontSize="large" />
            </Link>
          </div>
        </form>
      </section>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
