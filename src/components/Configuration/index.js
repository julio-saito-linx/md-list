import React from 'react';
import {connect} from 'cerebral-view-react';
import styles from './styles';
import ConfigurationField from './ConfigurationField';
import R from 'ramda';

export default connect({
  configurations: 'configurations.*',
  user_configurations: 'login.user.configurations.*',
  user_id: 'login.user.uid',
  is_admin: 'login.user.is_admin',
}, {
  pageLoaded: 'configurations.pageLoaded',
  createInitialConfigurationsClicked: 'configurations.createInitialConfigurationsClicked',
},
  class Configuration extends React.Component {
    componentDidMount() {
      this.props.pageLoaded();
    }
    render() {
      // wait prop
      if (R.pathOr(
          null,
          ['app', 'restricted_access_to_members'],
          this.props.configurations) === null) {
        return null;
      }

      const has_user_configuration = R.pathOr(
          null,
          ['desktop', 'font_size'],
          this.props.user_configurations) !== null;

      return (
        <div style={styles.container} className="container">

          <section className="title">
            Configurations
          </section>

          <section className="fields">

            {/*
              /////////////
              Global App (Admin Only)
              /////////////
            */}
            <div className="fieldGroup">

              <div className="fieldGroupTitle">
                Chat (admin only)
              </div>

              <ConfigurationField
                title="Private"
                description="Only members can read and post items"
                only_admin={true}
                value={R.pathOr(false, ['app', 'restricted_access_to_members'], this.props.configurations)}
                path={'/configurations/app/restricted_access_to_members'}
              />

              <ConfigurationField
                title="Shared Itens"
                description="User can edit others users items"
                only_admin={true}
                value={R.pathOr(false, ['app', 'edit_other_users_items'], this.props.configurations)}
                path={'/configurations/app/edit_other_users_items'}
              />

            </div>

            {/*
              /////////////
              Create Configurations
              /////////////
            */}
            <div className="fieldGroup">

              <div className="fieldGroupTitle">
                Create Configurations
              </div>

              <div className="fieldContainer">
                <div className="labelContainer">
                  <div style={styles.label} className="label">
                    Initial Configuration
                  </div>
                  <div style={styles.labelDescription} className="label">
                    Create initial configurations (do this first)
                  </div>
                </div>
                <div style={styles.value} className="value">
                  <input
                    type="button"
                    value="RESET"
                    onClick={this.props.createInitialConfigurationsClicked}
                  />
                </div>
              </div>

            </div>


            {/*
              /////////////
              Current User
              /////////////
            */}
            {has_user_configuration && this.props.user_configurations.desktop && (
              <div className="fieldGroup">

                <div className="fieldGroupTitle">
                  Display Desktop (User)
                </div>

                <ConfigurationField
                  title="Font Size"
                  description="Items font size"
                  value={this.props.user_configurations.desktop.font_size}
                  path={`users/${this.props.user_id}/configurations/desktop/font_size`}
                />

                <ConfigurationField
                  title="Display Edit"
                  description="Show edit button on each message"
                  value={this.props.user_configurations.desktop.show_edit_button}
                  path={`users/${this.props.user_id}/configurations/desktop/show_edit_button`}
                />

                <ConfigurationField
                  title="Display Delete"
                  description="Show delete button on each message"
                  value={this.props.user_configurations.desktop.show_delete_button}
                  path={`users/${this.props.user_id}/configurations/desktop/show_delete_button`}
                />
              </div>
            )}

            {has_user_configuration && this.props.user_configurations.mobile && (
              <div className="fieldGroup">

                <div className="fieldGroupTitle">
                  Display Mobile (User)
                </div>

                <ConfigurationField
                  title="Font Size"
                  description="Items font size"
                  value={this.props.user_configurations.mobile.font_size}
                  path={`users/${this.props.user_id}/configurations/mobile/font_size`}
                />

                <ConfigurationField
                  title="Display Edit"
                  description="Show edit button on each message"
                  value={this.props.user_configurations.mobile.show_edit_button}
                  path={`users/${this.props.user_id}/configurations/mobile/show_edit_button`}
                />

                <ConfigurationField
                  title="Display Delete"
                  description="Show delete button on each message"
                  value={this.props.user_configurations.mobile.show_delete_button}
                  path={`users/${this.props.user_id}/configurations/mobile/show_delete_button`}
                />

              </div>
            )}


            {/*
              /////////////
              Global User (Admin Only)
              /////////////
            */}
            {this.props.configurations.user && this.props.configurations.user.desktop && (
              <div className="fieldGroup">

                <div className="fieldGroupTitle">
                  Display Desktop (Global)
                </div>

                <ConfigurationField
                  title="Font Size"
                  only_admin={true}
                  description="Items font size"
                  value={this.props.configurations.user.desktop.font_size}
                  path={'/configurations/user/desktop/font_size'}
                />

                <ConfigurationField
                  title="Display Edit"
                  only_admin={true}
                  description="Show edit button on each message"
                  value={this.props.configurations.user.desktop.show_edit_button}
                  path={'/configurations/user/desktop/show_edit_button'}
                />

                <ConfigurationField
                  title="Display Delete"
                  only_admin={true}
                  description="Show delete button on each message"
                  value={this.props.configurations.user.desktop.show_delete_button}
                  path={'/configurations/user/desktop/show_delete_button'}
                />
              </div>
            )}

            {this.props.configurations.user && this.props.configurations.user.mobile && (
              <div className="fieldGroup">

                <div className="fieldGroupTitle">
                  Display Mobile (Global)
                </div>

                <ConfigurationField
                  title="Font Size"
                  only_admin={true}
                  description="Items font size"
                  value={this.props.configurations.user.mobile.font_size}
                  path={'/configurations/user/mobile/font_size'}
                />

                <ConfigurationField
                  title="Display Edit"
                  only_admin={true}
                  description="Show edit button on each message"
                  value={this.props.configurations.user.mobile.show_edit_button}
                  path={'/configurations/user/mobile/show_edit_button'}
                />

                <ConfigurationField
                  title="Display Delete"
                  only_admin={true}
                  description="Show delete button on each message"
                  value={this.props.configurations.user.mobile.show_delete_button}
                  path={'/configurations/user/mobile/show_delete_button'}
                />

              </div>
            )}

          </section>

        </div>
      );
    }

  }
);