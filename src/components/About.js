import {
  Modal
} from 'react-bootstrap'

function About(props) {
  return (
    <>
      <Modal show={props.show} onHide={() => props.onHide()}>
        <Modal.Header closeButton>
          <Modal.Title>About REStake</Modal.Title>
        </Modal.Header>
        <Modal.Body className="small">
          <h5>How REStake works</h5>
          <p>REStake makes use of a new feature in Cosmos blockchains called Authz. This allows a validator (or any other wallet) to send certain pre-authorised transactions on your behalf.</p>
          <p>When you enable REStake you authorise the validator to send WithdrawDelegatorReward for any address, and Delegate to their own validator address. The validator cannot delegate to any other validators, and the authorisation expires automatically after one year and you can revoke at any time.</p>
          <h5>How to use REStake</h5>
          <ol>
            <li>Choose a network. Some don't support Authz yet but many do.</li>
            <li>Delegate to any validators who offers the REStake service.</li>
            <li>Enable REStake on the validators you want to compound rewards.</li>
            <li>Watch the countdown timer and profit!</li>
          </ol>
          <p>The project is entirely open source and instructions for running and contributing to REStake can be <a href="https://github.com/Crosnest/restake" target="_blank" rel="noreferrer">found on Github</a>.</p>
          <h5>About ECO Stake 🌱</h5>
          <p>ECO Stake built REStake to make it easy for all validators to run an autocompounder with Authz, and it's one of many projects we work on in the ecosystem.</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default About
