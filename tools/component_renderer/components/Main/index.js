import React from 'react';
import { connect } from 'cerebral-view-react';
import NotificationSystem from 'react-notification-system';
import styles from './styles';
import { redirections, getPages } from '../../../../src/components/Main';

export default connect({
    current_page: 'main.current_page',
  }, {
    ...redirections,
  },
  class Main extends React.Component {
    render() {
      const pages = getPages();
      return (
        <div style={styles.mainContainer} id="mainContainer">
          <NotificationSystem ref="notificationSystem"/>
          <header style={styles.header}>
            <div style={styles.titleContainer} id="titleContainer">
              <a
                target="_blank"
                style={styles.titleLink}
                onClick={() => this.props.redirectedToChatList()}
              >
                md list {this.props.page_is_visible}
              </a>
              <a
                style={styles.topLink}
                onClick={() => this.props.redirectedToConfiguration()}
              >
                config
              </a>

              <a
                style={styles.topLink}
                onClick={() => this.props.redirectedToSearch()}
              >
                search
              </a>

              <div>
                <a
                  style={styles.topLink}
                  onClick={() => this.props.redirectedToMembers()}
                >
                  members
                </a>

                <a
                  style={styles.topLink}
                  onClick={() => this.props.redirectedToJobs()}
                >
                  Jobs
                </a>
                <a
                  style={styles.topLink}
                  onClick={() => this.props.redirectedToExecutions()}
                >
                  Executions
                </a>
                <a
                  style={styles.topLink}
                  onClick={() => this.props.redirectedToBody_Results()}
                >
                  Body_Results
                </a>
                <a
                  style={styles.topLink}
                  onClick={() => this.props.redirectedToJSON_Extrations()}
                >
                  JSON_Extrations
                </a>
                <a
                  style={styles.topLink}
                  onClick={() => this.props.redirectedToMarkdown_Conversions()}
                >
                  Markdown_Conversions
                </a>
              </div>
            </div>
            <div style={styles.buttonsContainer} id="buttonsContainer">
              {this.props.is_logged && (
                <img style={styles.userPhoto} id="userPhoto" src={this.props.user.photoURL} alt="photo"/>
              )}

              {this.props.is_logged && (
                <div
                  style={styles.link} id="link"
                  onClick={this.props.signOutClicked}
                >
                  logout
                </div>
              )}
            </div>
          </header>

          <section
            id="sectionBody"
            style={styles.bodySection}
          >
            {pages[ this.props.current_page ].body}
          </section>

          <footer style={styles.footer}>
            {pages[ this.props.current_page ].footer}
          </footer>

        </div>
      );
    }
  }
);