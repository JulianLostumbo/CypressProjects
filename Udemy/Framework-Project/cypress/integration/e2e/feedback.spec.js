import FeecbackPage from "../../page-objects/pages/FeecbackPage"
describe('Feedback tests', () => {
    before(() => {
        FeecbackPage.load()
    })

    it('should submit feedback form', ()=>{
        FeecbackPage.submitFeedback()
    })
})