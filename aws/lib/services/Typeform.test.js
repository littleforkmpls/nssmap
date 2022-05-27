const { expect } = require('../../test');
const fs = require('fs');
const { Stream } = require('stream');
const { getFilename } = require('../utils/url');

const { Typeform } = require('./Typeform');

describe('services/Typeform.js', () => {

  const baseUrl = process.env.TYPEFORM_URL;
  const formId = process.env.TYPEFORM_FORM_ID;
  const token  = process.env.TYPEFORM_TOKEN;

  describe('getResponses()', () => {

    it('should throw if no form id is provided', async () => {
      await expect(async () => {
        await Typeform.getResponses({baseUrl});
      }).to.async.throw('Non existing form with id responses');
    });

    it('should throw if no token is provided', async () => {
      await expect(async () => {
        await Typeform.getResponses({baseUrl, formId, token: ''});
      }).to.async.throw('Authentication credentials not found on the Request Headers');
    });

    it('should not throw if token and form id are valid', async () => {
      await expect(async () => {
        await Typeform.getResponses({baseUrl, formId, token});
      }).to.not.async.throw();
    });

    it('should return an array of responses', async () => {
      const result = await Typeform.getResponses({baseUrl, formId, token});
      await expect(result).to.be.an('array').that.is.not.empty;
      await expect(result[0]).to.be.an('object').with.property('response_id');
      // console.log(result);
    });

  });

  // ******************************************************

  describe('Get Files', () => {

    let fileUrl = 'https://api.typeform.com/forms/Wudz4qvi/responses/7l1zu7f9s6otmjchqcqkyeg7l1zu7f97/fields/J429I5JhdsSq/files/1c2a9eddfb99-gage_hall_1.webp';

    beforeEach(async () => {
      if (fileUrl) return;
      const responses = await Typeform.getResponses({baseUrl, formId, token, query: {page_size: 1}});
      if (!responses.length) throw new Error('Cannot find a valid file URL, no form responses');
      responses[0].answers.forEach(answer => {
        if (!fileUrl && answer.file_url) fileUrl = answer.file_url;
      });
    });

    // ******************************************

    describe('getFileContents()', () => {

      it('should return a Buffer', async () => {
        const result = await Typeform.getFileContents({fileUrl, token});
        await expect(result instanceof Buffer).to.be.true;
        await expect(result.length).to.be.greaterThan(0);
      });

      it.skip('should be an image', async () => {
        // Download image into the local folder to manually verify it's valid
        const result = await Typeform.getFileContents({fileUrl, token});
        const filename = getFilename(fileUrl);
        fs.writeFileSync(filename, result);
      });
    });

    // ******************************************

    describe('getFileStream()', () => {

      it('should return a Stream', async () => {
        const result = await Typeform.getFileStream({fileUrl, token});
        await expect(result instanceof Stream).to.be.true;
      });

      it.skip('should be an image', async () => {
        // Stream image into the local folder to manually verify it's valid
        const result = await Typeform.getFileStream({fileUrl, token});
        const filename = getFilename(fileUrl);
        const write = fs.createWriteStream(filename);
        await result.pipe(write);
      });
    });

  });

});