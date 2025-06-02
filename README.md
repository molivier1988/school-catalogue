# School Catalogue

## Keywords

|                 |                 |             |            |
| --------------- | --------------- | ----------- | ---------- |
| **class**       | **constructor** | **extends** | **getter** |
| **inheritance** | **setter**      |             |            |

## Description

Create classes that model schools at various levels (primary, middle, high), with appropriate properties and methods.

The parent(super) class `School` provides the template for the 3 levels of schools. Each school will have its own properties and methods.

Finally create a SchoolCatalog class that holds a collection of school objects.

## Learning points

The **constructor** of a sub-class will take arguments from its parent and also for class specific properties. The 1st line of these constructors (sub-class) **must always call the parents constructor using `super(args...)`**

### Static Methods

Static methods are defined in the super class and can only be called by the super class (see lines 50-53). To call these static methods `<ClassName>.method();` (see lines 110-117)

## Summary

This project provided additional practice focused on the key principles of object classes including **inheritance**, **constructors** and others
