const commentInput = document.querySelector('#comment-input');
const commentSubmit = document.querySelector('#comment-submit');
const modal = document.querySelector('#modal');
const modalCommentInput = document.querySelector('#modal-comment-input');
const modalCommentSubmit = document.querySelector('#modal-comment-submit');
const postContainer = document.querySelector('#post-container');

commentSubmit.addEventListener('click', () => {
  const comment = commentInput.value;

  if (comment.trim() !== '') {
    crearPost(comment);
    commentInput.value = '';
    commentSubmit.disabled = true;
  }
});

commentInput.addEventListener('input', () => {
  commentSubmit.disabled = commentInput.value.trim() === '';
});

modalCommentInput.addEventListener('input', () => {
  modalCommentSubmit.disabled = modalCommentInput.value.trim() === '';
});

modalCommentSubmit.addEventListener('click', () => {
  const comment = modalCommentInput.value;

  if (comment.trim() !== '') {
    crearPost(comment);
    modalCommentInput.value = '';
    modalCommentSubmit.disabled = true;
    cerrarModal();
  }
});

function crearPost(comment) {
  const post = document.createElement('div');
  post.classList.add('post');
  post.innerText = comment;
    
  postContainer.appendChild(post);
}

function abrirModal() {
  modal.style.display = 'block';
}

function cerrarModal() {
  modal.style.display = 'none';
}
