import React, { Component } from "react";

import ThemeProvider from "./components/ThemeProvider";
import Placeholders from "./contexts/Placeholders";
import Room from "./routes/Room";
import { PlaceholderGenerator } from "./types";
import { colorToString, darken } from "./utils/colorify";

interface Props {
  configUrl: string;
  userData?: string;
  roomName?: string;
  gridPlaceholder: PlaceholderGenerator;
  haircheckHeaderPlaceholder: PlaceholderGenerator;
  emptyRosterPlaceholder: PlaceholderGenerator;
  homepagePlaceholder: PlaceholderGenerator;
}

class App extends Component<Props> {
  public render() {
    const {
      roomName,
      configUrl,
      userData,
      gridPlaceholder,
      haircheckHeaderPlaceholder,
      emptyRosterPlaceholder,
      homepagePlaceholder
    } = this.props;
    return (
      <ThemeProvider>
        <Placeholders.Provider
          value={{
            gridPlaceholder,
            haircheckHeaderPlaceholder,
            emptyRosterPlaceholder,
            homepagePlaceholder
          }}
        >
          <div>
            <div>
              {roomName ? (
                <Room
                  name={roomName}
                  configUrl={configUrl}
                  userData={userData}
                />
              ) : (
                <div
                  ref={node => {
                    if (
                      node &&
                      homepagePlaceholder &&
                      node.childElementCount === 0
                    ) {
                      const el = homepagePlaceholder();
                      if (el) {
                        node.appendChild(el);
                      }
                    }
                  }}
                />
              )}
            </div>
          </div>
        </Placeholders.Provider>
      </ThemeProvider>
    );
  }
}

export default App;

//
// class App extends Component<Props> {
//   public render() {
//     const {
//       roomName,
//       configUrl,
//       userData,
//       gridPlaceholder,
//       haircheckHeaderPlaceholder,
//       emptyRosterPlaceholder,
//       homepagePlaceholder
//     } = this.props;
//     return (
//       <ThemeProvider>
//         <Placeholders.Provider
//           value={{
//             gridPlaceholder,
//             haircheckHeaderPlaceholder,
//             emptyRosterPlaceholder,
//             homepagePlaceholder
//           }}
//         >
//           <div>
//             <GlobalStyle />
//             <Container>
//               {roomName ? (
//                 <Room
//                   name={roomName}
//                   configUrl={configUrl}
//                   userData={userData}
//                 />
//               ) : (
//                 <div
//                   ref={node => {
//                     if (
//                       node &&
//                       homepagePlaceholder &&
//                       node.childElementCount === 0
//                     ) {
//                       const el = homepagePlaceholder();
//                       if (el) {
//                         node.appendChild(el);
//                       }
//                     }
//                   }}
//                 />
//               )}
//             </Container>
//           </div>
//         </Placeholders.Provider>
//       </ThemeProvider>
//     );
//   }
// }
