let app = require('../app')
let chai = require('chai')
let chaiHttp = require('chai-http')

chai.should()
chai.use(chaiHttp)


describe('/GET ping', () => {
    it('it should respond with pong', (done) => {
      chai.request(app)
          .get('/ping')
          .end((err, res) => {
              res.should.have.status(200);
              res.text.should.be.a('string');
              res.text.should.be.eql('pong');
            done();
          });
    });
});