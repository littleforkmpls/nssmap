const { expect } = require('../../test');
const { WordPress } = require('./WordPress');

describe('services/WordPress.js', () => {

  const siteUrl = process.env.WORDPRESS_URL;

  /** @type {WordPressCreds} */
  const creds = {
    username: process.env.WORDPRESS_USERNAME,
    password: process.env.WORDPRESS_PASSWORD
  }

  // ******************************************************

  describe('getPosts()', () => {

    it('should return an array of objects', async () => {
      const result = await WordPress.getPosts(siteUrl, {creds});
      await expect(result).to.be.an('array').that.is.not.empty;
      await expect(result[0]).to.be.an('object').with.property('id');
      // console.log(result);
    });
  });

  // ******************************************************

  describe('getPost()', () => {

    it('should return null if post not found', async () => {
      const result = await WordPress.getPost(siteUrl, {itemId: 1, creds});
      await expect(result).to.be.null;
    });

    it('should return object if post is found', async () => {
      const itemId = 20; // may need to change this to a valid ID
      const result = await WordPress.getPost(siteUrl, {itemId, creds});
      await expect(result).to.be.an('object').with.property('id', itemId);
      // console.log(result);
    });
  });

  // ******************************************************

  describe('createPost()', () => {

    it('should throw if body is missing required fields', async () => {
      await expect(async () => {
        await WordPress.createPost(siteUrl, {creds, body: {}});
      }).to.async.throw('Content, title, and excerpt are empty.');
    });

    it.skip('should not throw if body includes required fields', async () => {
      // Write: will create a post in WordPress
      await expect(async () => {
        const body = {content: 'Test', title: 'Test', excerpt: 'Test'};
        await WordPress.createPost(siteUrl, {creds, body});
      }).to.not.async.throw();
    });

    it.skip('should return the post object on success', async () => {
      // Write: will create a post in WordPress
      const body = {content: 'Test', title: 'Test', excerpt: 'Test'};
      const result = await WordPress.createPost(siteUrl, {creds, body});
      await expect(result).to.be.an('object').with.property('id');
      // console.log(result);
    });
  });

});