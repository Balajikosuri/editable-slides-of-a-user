import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const usersList = [
  {
    id: 1,
    name: "Toby Kiehn",
    email: "Eladio.Padberg33@hotmail.com",
    phoneNumber: "271.201.2528 x81847",
  },
  {
    id: 2,
    name: "Ellis Schumm",
    email: "Harrison60@gmail.com",
    phoneNumber: "(720) 484-3634 x84452",
  },
  {
    id: 3,
    name: "Ollie Buckridge",
    email: "Florida51@hotmail.com",
    phoneNumber: "(721) 357-1440 x87686",
  },
  {
    id: 4,
    name: "Irma Osinski",
    email: "Nikolas_Stiedemann66@hotmail.com",
    phoneNumber: "(456) 301-9623 x13533",
  },
  {
    id: 5,
    name: "Miss Edna Aufderhar",
    email: "Rosalia_Bechtelar72@yahoo.com",
    phoneNumber: "(705) 888-3514 x43327",
  },
  {
    id: 6,
    name: "Irvin Hauck",
    email: "Vladimir70@hotmail.com",
    phoneNumber: "1-273-423-3239 x3435",
  },
  {
    id: 7,
    name: "Mr. Jo Stanton",
    email: "Sigurd.Yundt@gmail.com",
    phoneNumber: "965-206-7258 x75654",
  },
];

class App extends React.Component {
  state = {
    initialUSerList: usersList,
    activeTabId: usersList[0].id,
    activeTabIndex: 0,
    isEditEnable: false,
  };

  onClickUserTab = (index) => {
    const { initialUSerList } = this.state;
    const activeUserData = initialUSerList[index];
    this.setState({
      activeUserData,
      activeTabIndex: index,
      activeTabId: activeUserData.id,
    });
  };

  onMoveNxtTab = () => {
    const { activeTabIndex, initialUSerList } = this.state;

    if (activeTabIndex < usersList.length - 1) {
      this.setState((prevState) => ({
        activeTabIndex: prevState.activeTabIndex + 1,
        activeUserData: initialUSerList[prevState.activeTabIndex + 1],
        activeTabId: initialUSerList[prevState.activeTabIndex + 1].id,
      }));
    }
  };

  onEnableEditInput = () => {
    this.setState((prevState) => ({ isEditEnable: !prevState.isEditEnable }));
  };

  onChangeInput = (currentUserData, e) => {
    const updatedName = e.target.value;
    const userProp = e.target.name;
    const currentUserId = currentUserData.id;
    const { initialUSerList } = this.state;
    const updatedData = initialUSerList.map((eachUser) => {
      if (eachUser.id === currentUserId) {
        return { ...eachUser, [userProp]: updatedName };
      }
      return eachUser;
    });

    this.setState({
      initialUSerList: updatedData,
    });
  };

  renderUserTabs() {
    const { initialUSerList, activeTabId } = this.state;
    return (
      <div className="left-sidebar">
        <ol className="cards-wrapper">
          {initialUSerList.map((user, i) => (
            <li
              className={`w-60 ${user.id === activeTabId && "active-tab"}`}
              key={user.id}
            >
              <button
                onClick={() => this.onClickUserTab(i)}
                className="btn w-100  m-2"
              >
                <div className="card wrapper w-80 m-2 p-3 bg-light border text-start">
                  <h2 className="text-bold text-primary">
                    <b className="text-dark">Name: </b>
                    {user.name}
                  </h2>
                  <p>
                    <b>Email: </b>
                    {user.email}
                  </p>
                  <p>
                    <b>Phone:</b> {user.phoneNumber}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  render() {
    const { activeTabIndex, isEditEnable, initialUSerList } = this.state;
    // console.log(activeTabIndex, new Date().toLocaleTimeString());

    return (
      <div className="wrapper gap-5 w-100 bg-light p-5 d-flex flex-column">
        <header>
          <h1>Slides Shower</h1>
        </header>
        <div className="w-100 m-auto">
          <button onClick={this.onMoveNxtTab} className="btn btn-primary ">
            + New
          </button>
          <br />
          <span className="text-danger fs-6">
            * for new slide please click on{" "}
            <b className=" text-primary  p-2">+New</b> Button
          </span>
        </div>

        <div className="app-container">
          {this.renderUserTabs()}
          <div className="body p-4">
            <div className="card  w-100 m-2 p-3 bg-light border">
              <>
                <b className="text-dark">Name: </b>
                {!isEditEnable ? (
                  <h2
                    onClick={() => this.onEnableEditInput()}
                    className="text-bold text-primary"
                    name="name"
                  >
                    {initialUSerList[activeTabIndex].name}
                  </h2>
                ) : (
                  <input
                    onBlur={() => this.onEnableEditInput()}
                    // onFocus={() => this.onEnableEditInput()}
                    onChange={(e) =>
                      this.onChangeInput(initialUSerList[activeTabIndex], e)
                    }
                    type="text"
                    className="input text-primary form-control"
                    value={initialUSerList[activeTabIndex].name}
                    name="name"
                  />
                )}
              </>
              <>
                <b className="text-dark">Email: </b>
                {!isEditEnable ? (
                  <p
                    onClick={() => this.onEnableEditInput()}
                    className="text-bold"
                  >
                    {initialUSerList[activeTabIndex].email}
                  </p>
                ) : (
                  <input
                    onBlur={() => this.onEnableEditInput()}
                    // onFocus={() => this.onEnableEditInput()}
                    onChange={(e) =>
                      this.onChangeInput(initialUSerList[activeTabIndex], e)
                    }
                    type="text"
                    className="input form-control"
                    value={initialUSerList[activeTabIndex].email}
                    name="email"
                  />
                )}
              </>
              <>
                <b className="text-dark">phoneNumber: </b>
                {!isEditEnable ? (
                  <p
                    onClick={() => this.onEnableEditInput()}
                    className="text-bold"
                  >
                    {initialUSerList[activeTabIndex].phoneNumber}
                  </p>
                ) : (
                  <input
                    onBlur={() => this.onEnableEditInput()}
                    // onFocus={() => this.onEnableEditInput()}
                    onChange={(e) =>
                      this.onChangeInput(initialUSerList[activeTabIndex], e)
                    }
                    type="text"
                    className="input  form-control"
                    value={initialUSerList[activeTabIndex].phoneNumber}
                    name="phoneNumber"
                  />
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
