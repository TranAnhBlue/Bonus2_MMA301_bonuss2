import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  ApproveNowIcon,
  DisciplineIcon,
  FptCareIcon,
  LearningIcon,
  MyTaskIcon,
  NewsIcon,
  RewardIcon,
  EventIcon,
  SurveyIcon,
  DatingIcon,
  PayslipIcon,
  BirthdayIcon,
  EmployeeInfoIcon,
  GameIcon,
  StaraveIcon,
} from "../assets/icon";

const AllApps = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isGridView, setIsGridView] = useState(false);

  const Works = [
    {
      id: 1,
      title: "Approve Now",
      subtitle:
        "Notify managers of pending requests and allow managers to approve/reject requests from internal tools",
      icon: <ApproveNowIcon />,
    },
    {
      id: 2,
      title: "Reward",
      subtitle:
        "Send colleagues a thank you note or reward Gold for exceptional contribution.",
      icon: <RewardIcon />,
    },
    {
      id: 3,
      title: "Discipline",
      subtitle:
        "Send a discipline warning to subordinates for violation of codes of conduct",
      icon: <DisciplineIcon />,
    },
    {
      id: 4,
      title: "Learning",
      subtitle:
        "View a list of mandatory, registered and suggested learning courses; check-in and send feedback for each course",
      icon: <LearningIcon />,
    },
    {
      id: 5,
      title: "My Tasks",
      subtitle: "",
      icon: <MyTaskIcon />,
    },
  ];

  const utilities = [
    { id: 1, title: "FPT Care", subtitle: "FPT Care", icon: <FptCareIcon /> },
    {
      id: 2,
      title: "Events",
      subtitle:
        "Register, check-in, check-out, send feedback to company events and programs",
      icon: <EventIcon />,
    },
    {
      id: 3,
      title: "Survey",
      subtitle:
        "Conduct and collect responses for company-wide or department-wide surveys",
      icon: <SurveyIcon />,
    },
    { id: 4, title: "FPT Dating", subtitle: "Dating feature.", icon: <DatingIcon /> },
    { id: 5, title: "Payslip", subtitle: "Payslip", icon: <PayslipIcon /> },
    {
      id: 6,
      title: "Birthday",
      subtitle:
        "Your birthday is a special moment. We're very happy to send the best wishes for you.\nColleagues can send you birthday wishes on myFPT.",
      icon: <BirthdayIcon />,
    },
  ];

  const news = [
    {
      id: 1,
      title: "News",
      subtitle: "A collection of latest news and notable events around the company",
      icon: <NewsIcon />,
    },
    {
      id: 2,
      title: "Star Ave",
      subtitle: "Recognise notable achievements within a business unit or within FPT",
      icon: <StaraveIcon />,
    },
  ];

  const wikiItems = [
    {
      id: 1,
      title: "Employee Info",
      subtitle:
        "Basic, non-confidential employee information (name, gender, department, etc.)",
      icon: <EmployeeInfoIcon />,
    },
  ];

  const game = [
    {
      id: 1,
      title: "Game",
      subtitle: "Community-engaging games with Gold as rewards",
      icon: <GameIcon />,
    },
  ];

  // Render item
  const renderMenuItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={[styles.menuItem, isGridView && styles.gridItem]}
    >
      <View style={[styles.iconContainer, { backgroundColor: "#E7ECFF" }]}>
        {item.icon}
      </View>
      {!isGridView ? (
        <View style={styles.textContainer}>
          <Text style={styles.menuTitle}>{item.title}</Text>
          <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
        </View>
      ) : (
        <Text style={styles.gridTitle}>{item.title}</Text>
      )}
    </TouchableOpacity>
  );

  // Render section
  const renderSection = (title, items) => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredItems.length === 0) return null;

    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <View style={isGridView ? styles.gridContainer : null}>
          {filteredItems.map(renderMenuItem)}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Search + Toggle */}
      <View style={styles.topRow}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Type feature's name"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Toggle grid/list */}
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsGridView(!isGridView)}
        >
          <Icon name={isGridView ? "list" : "grid-view"} size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Header */}
      <Text style={styles.header}>All Apps</Text>

      {/* Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {renderSection("WORK", Works)}
        {renderSection("UTILITIES", utilities)}
        {renderSection("NEWS", news)}
        {renderSection("WIKI", wikiItems)}
        {renderSection("GAME", game)}
      </ScrollView>
    </View>
  );
};

export default AllApps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 40,
  },

  // --- Search + Toggle ---
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 16,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  toggleButton: {
    padding: 8,
  },

  // --- Header ---
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 16,
  },

  scrollView: {
    flex: 1,
  },

  // --- Section ---
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#666",
    backgroundColor: "#F5F5F5",
    padding: 12,
  },

  // --- List Item ---
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    marginBottom: 4,
  },
  menuSubtitle: {
    fontSize: 13,
    color: "#666",
    lineHeight: 18,
  },

  // --- Grid ---
    gridContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      paddingHorizontal: 8,
    },
  gridItem: {
    width: "25%", // ~4 cột
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 0,
  },
  gridTitle: {
    fontSize: 12,
    marginTop: 6,
    textAlign: "center",
    color: "#000",
  },
});
