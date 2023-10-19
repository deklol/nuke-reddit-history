# Reddit Profile Cleaner

Reddit Profile Cleaner is a Greasemonkey user script that allows you to easily delete all comments and submitted posts on your Reddit profile page. This README provides instructions for installing the script, whether you're using Chrome or Firefox, and how to manually install the script.

You must delete your comments and submitted posts page by page. You cannot do it all at once.

## Installation

### Method 1: Installing Greasemonkey

**For Chrome:**

1. Open Google Chrome.
2. Visit the [Greasemonkey extension page](https://chrome.google.com/webstore/detail/greasemonkey/).
3. Click on the "Add to Chrome" button to install Greasemonkey.

**For Firefox:**

1. Open Mozilla Firefox.
2. Visit the [Greasemonkey add-on page](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/).
3. Click on the "Add to Firefox" button to install Greasemonkey.

### Method 2: Manual Installation

If you prefer to manually install the script, follow these steps:

1. Download the user script file (`reddit-profile-cleaner.user.js`) from this repository.

2. Open your browser.

3. Install the script by creating a new user script with the script above, however you **must** edit the following line (29) and insert your own username:

```body: `id=${commentId}&executed=deleted&r=u_USERNAME&uh=${encodeURIComponent(document.querySelector('input[name="uh"]').value)}&renderstyle=html`, ```

4. Save the script with a `.user.js` file extension (e.g., `reddit-profile-cleaner.user.js`).

5. Open your browser's extension settings.

6. Drag and drop the `reddit-profile-cleaner.user.js` file you created onto your browser's extension settings page to install the script.

### Method 3: Quick Installation (Alternative)

You can quickly install the script by downloading and installing the `reddit-profile-cleaner.user.js` file directly.

1. Download the user script file (`reddit-profile-cleaner.user.js`) from this repository.

2. Open your browser.

3. Drag and drop the `.user.js` file onto your browser. It should prompt you to install the script.

4. Follow the installation prompts to complete the process.

## Usage

Once the script is installed, visit your Reddit profile page (e.g., `https://www.reddit.com/user/username/`). You will find two buttons within the `<div class="titlebox">` on the page: "Delete All Comments" and "Delete All Posts." Clicking these buttons will allow you to delete all comments or submitted posts on your profile page.

Be aware that all data deleted using this script is irreversible.
Make sure to back up any content you want to keep before running the script.

## Contributing

If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on this GitHub repository.

---
