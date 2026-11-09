"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("This concept form is not connected to an inbox yet. Please contact MNCH on Instagram instead.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="contact-name">YOUR NAME<input id="contact-name" name="name" autoComplete="name" required placeholder="What should we call you?" /></label>
      <label htmlFor="contact-email">EMAIL ADDRESS<input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
      <label htmlFor="contact-message">WHAT&apos;S ON YOUR MIND?<textarea id="contact-message" name="message" rows={4} required placeholder="Tell us a little something..." /></label>
      <button className="button button-dark" type="submit">SEND A NOTE <span aria-hidden="true">↗</span></button>
      {message && <p className="form-feedback" role="status">{message}</p>}
      <p className="form-note">This demo form does not send or store your information.</p>
    </form>
  );
}
