export default function ThreadForm() {
  return (
      <form
        class=""
        style={{
          display: "grid",
          gridTemplateColumns: "min-content min-content",
          gap: "1rem",
        }}
      >
        <label for="post_title">Title</label>
        <input name="post_title" class="max-w-[40ch]" type="text" required />

        <label for="post_comment">Comment</label>
        <textarea
          name="post_comment"
          class="max-w-[40ch] resize-none"
          rows="3"
          required
        ></textarea>

        <label for="post_image">Image</label>
        <input name="post_image" type="file" />

        <button class="btn col-span-2" type="submit">
          Create thread
        </button>
      </form>
  );
}
