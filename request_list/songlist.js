async function setClipboard(text) {
	const type = "text/plain";

	const clipboardItemData = {
		[type]: text,
	};

	const clipboardItem = new ClipboardItem(clipboardItemData);
	await navigator.clipboard.write([clipboardItem]);
}

function addNotification(text) {
	let element = $('<div></div>');
	element.html(text);

	$("#notifications").append(element);

	setTimeout(function() {
		element.fadeOut(500, function() {
			element.remove();
		});
	}, 7250);
}

$("body").on("click", "#myTable tbody tr td:nth-child(1)", async function() {
	let text = `!smr ${$(this).text()}`;

	setClipboard(text);
	addNotification(`Copied <strong>${text}</strong>`);
});