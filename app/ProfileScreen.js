import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  AdminIcon,
  FaqIcon,
  LogoutIcon,
  MyProfileIcon,
  SettingsIcon,
  SupportIcon,
} from "../assets/icon";
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
  const menuItems = [
    { id: 1, title: "My Profile", icon: MyProfileIcon },
    { id: 2, title: "Settings", icon: SettingsIcon },
    { id: 3, title: "Support", icon: SupportIcon },
    { id: 4, title: "FAQ", icon: FaqIcon },
    { id: 5, title: "Admin", icon: AdminIcon },
    { id: 6, title: "Logout", icon: LogoutIcon, isLogout: true },
  ];

  const renderMenuItem = (item) => {
    const IconComponent = item.icon;
    return (
      <TouchableOpacity
        key={item.id}
        style={[styles.menuItem, item.isLogout && styles.logoutItem]}
      >
        <View style={styles.menuIconContainer}>
          <IconComponent width={24} height={24} />
        </View>
        <Text style={styles.menuTitle}>{item.title}</Text>
        {!item.isLogout && (
          <Icon name="keyboard-arrow-right" size={24} color="#C0C0C0" />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4285F4" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerBackground} />
      </View>

      {/* Avatar nằm nửa trên nửa dưới cover */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>K</Text>

          {/* Nút camera nằm đè */}
          <TouchableOpacity style={styles.cameraIcon}>
            <Ionicons name="camera" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* User Info */}
      <View>
        <Text style={styles.userName}>Pham Quang Khang (KHANGPQ3)</Text>
        <Text style={styles.userDepartment}>(BM SE)</Text>
      </View>

      {/* Menu */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.menuContainer}>
          {menuItems.map(renderMenuItem)}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>myFPT Version 5.9.10</Text>
          <Text style={styles.footerText}>Copyright © FPT Software 2021</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
  height: 140,
  backgroundColor: "#4285F4",
  marginHorizontal: 16,
  marginTop: 40,
  borderRadius: 12,
},
headerBackground: {
  flex: 1,
  borderRadius: 12,
},
avatarContainer: {
  alignItems: "center",
  marginTop: -60, // avatar nhô ra giữa cover và content
  marginBottom: 10,
},
avatar: {
  width: 120,
  height: 120,
  borderRadius: 60,
  backgroundColor: "#DDF0FF",
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 3,
  borderColor: "#FFFFFF",
  elevation: 4,
  position: "relative",
},
avatarText: {
  fontSize: 60,
  fontWeight: "bold",
  color: "#4285F4",
},
cameraIcon: {
  position: "absolute",
  bottom: 0,
  right: 0,
  backgroundColor: "#7e8d9cff",
  width: 32,
  height: 32,
  borderRadius: 16,
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 2,
  borderColor: "#FFFFFF",
},
userName: {
  marginTop: 8,
  fontSize: 18,
  fontWeight: "600",
  color: "#000000",
  textAlign: "center",
},
userDepartment: {
  fontSize: 14,
  color: "#666666",
  textAlign: "center",
  marginBottom: 10,
},
  scrollView: {
    flex: 1,
    marginTop: 10,
  },
  menuContainer: {
    backgroundColor: "#FFFFFF",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  logoutItem: {
    borderBottomWidth: 0,
  },
  menuIconContainer: {
    width: 28,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  menuTitle: {
    flex: 1,
    fontSize: 16,
    color: "#000000",
    fontWeight: "500",
  },
  footer: {
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  footerText: {
    fontSize: 12,
    color: "#999999",
    textAlign: "center",
    marginBottom: 4,
  },
});
