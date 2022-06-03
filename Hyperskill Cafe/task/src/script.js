const newReviewTitle = document.getElementById('reviewTitle');
const newReviewComment = document.getElementById('reviewText');
const newReviewName = document.getElementById('reviewName');

const baseDiv = document.getElementById('reviewsRow');
const submitBtn = document.getElementById('reviewButton');

submitBtn.addEventListener('click', submitComment);

function submitComment(e) {

    e.preventDefault();

    let addedElement = `<div class="col-lg-4,col-md-6,py-3">
                            <div class="card,h-100">
                                <div class="card-body">
                                    <h4 class="card-title">${newReviewTitle.value}</h4>
                                    <blockquote class="blockquote,mb-0">
                                        <p class="card-text">${newReviewComment.value}</p>
                                        <footer class="text-end,blockquote-footer"><i>${newReviewName.value ||
    'Anonymous'}</i></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>`;

    baseDiv.innerHTML += addedElement;}