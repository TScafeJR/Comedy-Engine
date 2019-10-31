const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
chai.use(chaiHttp);


describe('App', () => {
    const spyExpressGet = sinon.spy();
    const stubExpressUse = sinon.spy();
    const cookieParserStub = sinon.stub().returns('some-cookies');

    const fakeExpress = {
        get: spyExpressGet,
        use: stubExpressUse
    };

    const fakeJokeRoutes = {
        'joke-route-1': 'I do things',
        'joke-route-2': 'I do some other things'
    };

    const fakeManicheanRoutes = {
        'manichean-route-1': '😇',
        'manichean-route-2': '😈'
    };

    const stubExpress = sinon.stub().returns(fakeExpress);

    proxyquire('../../src/routes/app', {
        'express': stubExpress,
        'cookie-parser': cookieParserStub,
        './joke-routes': fakeJokeRoutes,
        './manichean-routes': fakeManicheanRoutes
    });

    it('should initialize express', () => {
        expect(stubExpress).to.have.been.called;
    });

    it('should call cookie parser', () => {
        expect(cookieParserStub).to.have.been.called;
    });

    it('should call use three times', () => {
        expect(stubExpressUse).to.have.callCount(4);
    });

    it('should call use with the cookie parser as an argument the first time it is evoked', () => {
       expect(stubExpressUse.getCall(0)).to.have.been.calledWith(cookieParserStub());
    });

    it('should call use with /joke, and jokeRoutes the second time it is evoked', () => {
        expect(stubExpressUse.getCall(1)).to.have.been.calledWith('/joke', fakeJokeRoutes);
    });

    it('should call use with /manichean, and manicheanRoutes the third time it is evoked', () => {
        expect(stubExpressUse.getCall(2)).
            to.have.been.calledWith('/manichean', fakeManicheanRoutes);
    });

    it('should call use with /, the third time it is evoked', () => {
        expect(stubExpressUse.getCall(3).args[0]).to.eql('/');
    });
});

describe('Routes', () => {
    const app = require('../../src/routes/app');

    describe('Error Routes', () => {
        it('returns an error for an undefined url', done => {
            chai.request(app).
                get('/some/random/ass/route').
                end((err, res) => {
                    expect(res).to.have.status(404);
                    expect(res.text).to.include('this page does not exist');
                    done();
                });
        });
    });

    describe('Joke Routes', () => {
        it('is able to hit the random route', done => {
            chai.request(app).
                get('/joke/random').
                end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });

        it('is able to hit the specific route', done => {
            chai.request(app).
                get('/joke/specific/3').
                end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe('Manichean Routes', () => {
        it('is able to hit the input route with joke in the body', done => {
            chai.request(app).
            get('/manichean/random').
            type('urlencoded').
            send({ joke: 'something' }).
            end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
        });

        it('the input route returns a status of 406 when the proper is not provided', done => {
            chai.request(app).
            get('/manichean/input').
            end((err, res) => {
                expect(res).to.have.status(406);
                done();
            });
        });

        it('is able to hit the random route', done => {
            chai.request(app).
            get('/manichean/random').
            end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
        });

        it('is able to hit the specific route', done => {
            chai.request(app).
            get('/manichean/specific/3').
            end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
        });
    });
});
